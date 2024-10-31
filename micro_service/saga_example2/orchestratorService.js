const { Kafka } = require('kafkajs');
const kafka = new Kafka({ clientId: 'orchestrator', brokers: ['localhost:9092'] });
const producer = kafka.producer();
const consumer = kafka.consumer({ groupId: 'orchestrator-group' });

const MAX_RETRY_COUNT = 3; // Số lần thử lại tối đa
const RETRY_DELAY_MS = 2000; // Thời gian chờ giữa các lần thử (ms)

// Hàm gửi tin nhắn với cơ chế retry
const sendMessageWithRetry = async (topic, key, value, retryCount = 0) => {
    try {
        await producer.send({ topic, messages: [{ key, value: JSON.stringify(value) }] });
    } catch (error) {
        if (retryCount < MAX_RETRY_COUNT) {
            console.log(`Retry ${retryCount + 1} for event ${key} with order ${value.orderId}`);
            setTimeout(() => sendMessageWithRetry(topic, key, value, retryCount + 1), RETRY_DELAY_MS);
        } else {
            console.error(`Failed to process event ${key} for order ${value.orderId} after ${MAX_RETRY_COUNT} retries`);
            // Thêm logic gửi thông báo lỗi hoặc kích hoạt rollback ở đây
        }
    }
};

(async () => {
    await producer.connect();
    await consumer.connect();
    await consumer.subscribe({ topic: 'order-events' });

    consumer.run({
        eachMessage: async ({ message }) => {
            const event = message.key.toString();
            const { orderId } = JSON.parse(message.value);

            if (event === 'OrderCreated') {
                console.log(`Order created for ${orderId}. Initiating payment.`);
                await sendMessageWithRetry('order-events', 'InitiatePayment', { orderId });
            } else if (event === 'PaymentSuccess') {
                console.log(`Payment successful for order ${orderId}. Initiating delivery.`);
                await sendMessageWithRetry('order-events', 'InitiateDelivery', { orderId });
            } else if (event === 'PaymentFailed') {
                console.log(`Payment failed for order ${orderId}. Order canceled.`);
                // Logic cho việc huỷ đơn hàng
            } else if (event === 'DeliverySuccess') {
                console.log(`Order ${orderId} has been delivered.`);
            }
        },
    });
})();
