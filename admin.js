import {kafka} from "kafkajs"

const kafka = new kafka({
    clientId : "kafka-app",
    brokers : ["192.168.31.197:9092"]
})

async function init() {
    
}