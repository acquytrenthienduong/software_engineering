const express = require('express');
const { Kafka } = require('kafkajs');
const app = express();

const kafka = new Kafka({ clientId: 'deliveryService', brokers: ['localhost:9092'] });
const consumer = kafka.consumer({ groupId: 'deliveryGroup' });
const orderTopic = 'order-events';

(async () => {
    await consumer.connect();
    await consumer.subscribe({ topic: orderTopic });

    consumer.run({
        eachMessage: async ({ message }) => {
            const event = message.key.toString();
            const { orderId } = JSON.parse(message.value);

            if (event === 'PaymentCompleted') {
                console.log(`Delivering order ${orderId}`);
                // Xử lý giao hàng
            } else if (event === 'PaymentFailed') {
                console.log(`Stopping delivery for ${orderId} due to payment failure`);
                // Không thực hiện giao hàng nếu thanh toán thất bại
            }
        },
    });
})();

app.listen(3003, () => console.log('DeliveryService listening on port 3003'));
