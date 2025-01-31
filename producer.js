const {kafka} = require("./client")
const readline =  require("readline")

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})
async function init() {
    const producer = kafka.producer()
    await producer.connect();

    console.log("Producer connected Successfully")

    rl.setPrompt('> ')
    rl.prompt();

    rl.on('line', async function(line) {
        const [username,location]=line.split(' ')

        await producer.send({
            topic: 'chat-messages',   
            messages: [
                { 
                 partition:location.toLowerCase()=== "north" ? 0 : 1,
                 key: 'online',
                 value: JSON.stringify({name:username,location}) }
            ],
        })
    }).on('close',async()=>{
        await  producer.disconnect();
    })
}

init()