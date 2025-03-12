import pkg from "rabbitmq-stream-js-client";
const { Environment, Producer } = pkg;

async function startProducer() {
    const environment = await Environment.builder()
        .host("localhost")
        .port(5552) // ✅ Kết nối qua cổng Stream
        .username("admin")
        .password("admin")
        .build();

    const streamName = "events_stream";

    // Tạo Stream nếu chưa có
    await environment.streamCreator().stream(streamName).create();

    const producer = await Producer.builder()
        .name("producer-1")
        .stream(streamName)
        .environment(environment)
        .build();

    console.log(`🚀 Producer is sending messages to stream: "${streamName}"...`);

    let counter = 1;
    setInterval(async () => {
        const message = `Event ${counter++}`;
        await producer.send(Buffer.from(message));
        console.log(`✅ Sent: "${message}"`);
    }, 1000);
}

startProducer();