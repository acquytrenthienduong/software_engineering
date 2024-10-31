const express = require('express');
const { Kafka } = require('kafkajs');
const app = express();
app.use(express.json());

const kafka = new Kafka({ clientId: 'orderService', brokers: ['localhost:9092'] });
const producer = kafka.producer();
const consumer = kafka.consumer({ groupId: 'orderGroup' });
const orderTopic = 'order-events';

(async () => {
    await producer.connect();
    await consumer.connect();
    await consumer.subscribe({ topic: orderTopic });

    // Xử lý sự kiện PaymentFailed để rollback đơn hàng
    consumer.run({
        eachMessage: async ({ message }) => {
            const event = message.key.toString();
            const { orderId } = JSON.parse(message.value);

            if (event === 'PaymentFailed') {
                console.log(`Rolling back order ${orderId} due to payment failure`);
                // Thực hiện rollback logic: Ví dụ, cập nhật trạng thái đơn hàng là "cancelled"
            }
        },
    });
})();

app.post('/orders', async (req, res) => {
    const orderId = `order-${Math.floor(Math.random() * 1000)}`;
    await producer.send({
        topic: orderTopic,
        messages: [{ key: 'OrderCreated', value: JSON.stringify({ orderId }) }],
    });
    res.send(`Order created with ID: ${orderId}`);
});

app.listen(3001, () => console.log('OrderService listening on port 3001'));
