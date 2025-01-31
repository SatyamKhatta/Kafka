const {kafka} = require("./client")

async function init() {
    const consumer = kafka.consumer()


    await consumer.connect()
    await consumer.subscribe({ topics: ['chat-messages'] })
    
}