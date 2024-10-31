const express = require('express');
const { Kafka } = require('kafkajs');
const app = express();

const kafka = new Kafka({ clientId: 'paymentService', brokers: ['localhost:9092'] });
const consumer = kafka.consumer({ groupId: 'paymentGroup' });
const producer = kafka.producer();
const orderTopic = 'order-events';

const MAX_RETRY = 3;

(async () => {
    await consumer.connect();
    await producer.connect();
    await consumer.subscribe({ topic: orderTopic });

    consumer.run({
        eachMessage: async ({ message }) => {
            const event = message.key.toString();
            const { orderId } = JSON.parse(message.value);

            if (event === 'OrderCreated') {
                console.log(`Processing payment for ${orderId}`);
                let success = false;
                let attempts = 0;

                while (!success && attempts < MAX_RETRY) {
                    try {
                        // Giả lập thanh toán
                        await processPayment(orderId);
                        console.log(`Payment successful for order ${orderId}`);

                        // Phát sự kiện PaymentCompleted
                        await producer.send({
                            topic: orderTopic,
                            messages: [{ key: 'PaymentCompleted', value: JSON.stringify({ orderId }) }],
                        });

                        success = true;
                    } catch (error) {
                        attempts++;
                        console.log(`Payment failed for ${orderId}, retrying... (${attempts}/${MAX_RETRY})`);

                        if (attempts === MAX_RETRY) {
                            // Sau khi thử nhiều lần mà vẫn thất bại, phát sự kiện PaymentFailed
                            console.log(`Payment failed permanently for ${orderId}`);
                            await producer.send({
                                topic: orderTopic,
                                messages: [{ key: 'PaymentFailed', value: JSON.stringify({ orderId }) }],
                            });
                        }
                    }
                }
            }
        },
    });
})();

async function processPayment(orderId) {
    // Giả lập lỗi thanh toán ngẫu nhiên
    if (Math.random() > 0.5) {
        throw new Error('Payment failed');
    }
    return true;
}

app.listen(3002, () => console.log('PaymentService listening on port 3002'));
