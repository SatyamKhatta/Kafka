const {kafka} = require("./client")

async function init() {
    const producer = kafka.producer()
    await producer.connect();

    console.log("Producer connected Successfully")


    await producer.send({
        partition:0,
        topic: 'chat-messages',
        messages: [
            { key: 'online', value: JSON.stringify({name:'Satyam' , Loc: 'Himachal'}) }
        ],
    })

  await  producer.disconnect();

}

init()