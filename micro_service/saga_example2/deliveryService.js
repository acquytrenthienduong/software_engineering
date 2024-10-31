const { Kafka } = require('kafkajs');
const kafka = new Kafka({ clientId: 'deliveryService', brokers: ['localhost:9092'] });
const consumer = kafka.consumer({ groupId: 'delivery-service-group' });
const producer = kafka.producer();

(async () => {
    await consumer.connect();
    await producer.connect();
    await consumer.subscribe({ topic: 'order-events' });

    consumer.run({
        eachMessage: async ({ message }) => {
            const event = message.key.toString();
            const { orderId } = JSON.parse(message.value);

            if (event === 'InitiateDelivery') {
                console.log(`Starting delivery for order ${orderId}`);
                await producer.send({
                    topic: 'order-events',
                    messages: [{ key: 'DeliverySuccess', value: JSON.stringify({ orderId }) }],
                });
            }
        },
    });
})();
