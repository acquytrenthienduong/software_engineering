const rabbit = require("rabbitmq-stream-js-client")

const client = await rabbit.connect({
    hostname: "localhost",
    port: 5552,
    username: "guest",
    password: "guest",
    vhost: "/",
})
const streamSizeRetention = 5 * 1e9
await client.createStream({ stream: streamName, arguments: { "max-length-bytes": streamSizeRetention } });

await client.declareConsumer({ stream: streamName, offset: rabbit.Offset.first() }, (message) => {
    console.log(`Received message ${message.content.toString()}`)
})