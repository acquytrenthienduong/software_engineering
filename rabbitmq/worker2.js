const amqp = require('amqplib');

async function startWorker2() {
    const connection = await amqp.connect('amqp://admin:admin@localhost');
    const channel = await connection.createChannel();
    const queue = 'task_queue';

    await channel.assertQueue(queue, { durable: true });

    console.log(`🟢 Worker 2 is waiting for messages in ${queue}...`);

    channel.consume(queue, async (msg) => {
        console.log(`🟢 Worker 2 received: "${msg.content.toString()}"`);
        await new Promise(resolve => setTimeout(resolve, 2000)); // Giả lập xử lý lâu
        channel.ack(msg);
    }, { noAck: false });
}

startWorker2();