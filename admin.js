const {kafka} = require("./client")
async function init() {
    const admin = kafka.admin();
  console.log("Admin connecting...");
  admin.connect();
  console.log("Admin Connection Success...");

  console.log("Creating Topic [chat-messages")
  await admin.createTopics({
    topics: [
      {
        topic: "chat-messages",
        numPartitions: 2,
      },
    ],
  });
  console.log("Topic Created [chat-messages")

  console.log("Disconnecting admin")
  await admin.disconnect();
}

init()