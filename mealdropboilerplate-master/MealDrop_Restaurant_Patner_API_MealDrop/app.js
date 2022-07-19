const express = require("express");
const cors = require("cors");
const amqp = require("amqplib/callback_api");

const restaurantRouter = require("./routes/restaurantRouter.js");
const Restaurant = require("./models/restaurantModel");
const {errorHandler} = require("./middlewares/errorMiddleware");

const app = express();

app.use(express.json());
app.use(cors({ origin: process.env.CLIENT_API}));
app.use("/api/v1/restaurants", restaurantRouter);
app.use(errorHandler);
amqp.connect("amqp://localhost", (connError, connection) => {
    if (connError) {
        return console.log(("Rabbit MQ server not started \n" + connError))
    }

    connection.createChannel(async (channelError, channel) => {
        if (channelError) throw channelError;

        channel.assertQueue("createOrder");
        channel.consume(
            "createOrder",
            async (msg) => {
                const newOrder = JSON.parse(msg.content.toString());
                const restaurant = await Restaurant.findById(newOrder.restaurantId);
                console.log("YES")
                if (restaurant) {
                    console.log("SUCCESSFUL")
                    restaurant.order.pendingOrder.push(newOrder);
                    restaurant.save();
                } else {
                    console.log("no such restaurant exists");
                }
            },
            {noAck: true}
        );
    });
});

module.exports = app;
