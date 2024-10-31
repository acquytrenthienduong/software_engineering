const { Kafka } = require('kafkajs');
const kafka = new Kafka({ clientId: 'paymentService', brokers: ['localhost:9092'] });
const consumer = kafka.consumer({ groupId: 'payment-service-group' });
const producer = kafka.producer();

(async () => {
    await consumer.connect();
    await producer.connect();
    await consumer.subscribe({ topic: 'order-events' });

    consumer.run({
        eachMessage: async ({ message }) => {
            const event = message.key.toString();
            const { orderId } = JSON.parse(message.value);

            if (event === 'InitiatePayment') {
                console.log(`Processing payment for order ${orderId}`);
                
                // Giả lập thanh toán: thành công với xác suất 80%
                const paymentSuccess = Math.random() > 0.2;
                
                if (paymentSuccess) {
                    console.log(`Payment successful for order ${orderId}`);
                    await producer.send({
                        topic: 'order-events',
                        messages: [{ key: 'PaymentSuccess', value: JSON.stringify({ orderId }) }],
                    });
                } else {
                    console.log(`Payment failed for order ${orderId}`);
                    await producer.send({
                        topic: 'order-events',
                        messages: [{ key: 'PaymentFailed', value: JSON.stringify({ orderId }) }],
                    });
                }
            }
        },
    });
})();
