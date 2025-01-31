const { Kafka } = require("kafkajs");

 exports.kafka = new Kafka({
    clientId : "kafka-app",
    brokers : ["192.168.31.197:9092"]
})