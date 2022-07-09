const amqp = require("amqplib");
const orderService = require("../services/orderService");
const queue = "createOrder";

async function createOrder(req, res) {
    try {
        const {userId, order, restaurantId} = req.body;
        const newOrder = await orderService.createOrder(userId, order, restaurantId);

        const conn = await amqp.connect("amqp://localhost");

        const ch1 = await conn.createChannel();
        ch1.sendToQueue(queue, Buffer.from(JSON.stringify(newOrder)));
        setTimeout(function () {
            conn.close();
            res.send("SENDED");
        }, 500);
    } catch (e) {
        console.log(e);
        return res.status(400).json({message: "Registration error"});
    }
}


module.exports = { createOrder};
