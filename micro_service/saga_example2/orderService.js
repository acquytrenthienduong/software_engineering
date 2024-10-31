const { Kafka } = require('kafkajs');
const kafka = new Kafka({ clientId: 'orderService', brokers: ['localhost:9092'] });
const consumer = kafka.consumer({ groupId: 'order-service-group' });
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
                const paymentSuccess = Math.random() > 0.2;
                const paymentEvent = paymentSuccess ? 'PaymentSuccess' : 'PaymentFailed';
                await producer.send({
                    topic: 'order-events',
                    messages: [{ key: paymentEvent, value: JSON.stringify({ orderId }) }],
                });
            }
        },
    });
})();
