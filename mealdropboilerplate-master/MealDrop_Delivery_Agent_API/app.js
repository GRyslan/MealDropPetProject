const express = require("express");
const cors = require("cors");
const amqp = require("amqplib/callback_api");
const Agent = require("./models/deliveryAgentModel");

const agentRouter = require("./routes/agentRouter");

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/v1/agent", agentRouter);

amqp.connect("amqp://localhost", (connError, connection) => {
    if (connError) {
        return console.log(("Rabbit MQ server not started \n" + connError))
    }

    connection.createChannel(async (channelError, channel) => {
        if (channelError) throw channelError;

        channel.assertQueue("completedOrder");
        channel.consume(
            "completedOrder",
            async (msg) => {
                const newDelivery = JSON.parse(msg.content.toString());
                // For now we are assigning task at random to the agent.
                // This can be changed by calculating location of restaurant, customer and agent
                const agent = await Agent.findOne();
                console.log("YES")
                if (agent) {
                    console.log("SUCCESSFUL")
                    newDelivery.agentId = agent._id;
                    agent.orders.toBePicked.push(newDelivery);
                }
                agent.save()
            },
            {noAck: true}
        );
    });
});

module.exports = app;
