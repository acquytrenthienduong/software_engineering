const amqp = require('amqplib');

async function startProducer() {
    const connection = await amqp.connect('amqp://admin:admin@localhost');
    const channel = await connection.createChannel();
    const queue = 'task_queue';

    await channel.assertQueue(queue, { durable: true });

    console.log(`🚀 Producer started! Sending messages to "${queue}"...`);

    let counter = 1;
    setInterval(() => {
        const message = `Task ${counter++}`;
        channel.sendToQueue(queue, Buffer.from(message), { persistent: true });
        console.log(`✅ Sent: "${message}"`);
    }, 1000);
}

startProducer();