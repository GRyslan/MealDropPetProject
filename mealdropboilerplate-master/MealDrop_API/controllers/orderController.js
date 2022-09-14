const amqp = require("amqplib");
const orderService = require("../services/orderService");
const ApiError = require("../classes/errorClass");
const queue = "createOrder";

async function createOrder(req, res,next) {
    try {
        const {userId, order, restaurantId} = req.body;
        console.log(req.body)


        const conn = await amqp.connect("amqp://localhost");
        const newOrder = await orderService.createOrder(userId, order, restaurantId);
        const ch1 = await conn.createChannel();
        ch1.sendToQueue(queue, Buffer.from(JSON.stringify(newOrder)));
        setTimeout(function () {
            conn.close();
            res.send("SENDED");
        }, 500);
    } catch (e) {
        if (e.code){
            return next(ApiError.internal("RabbitMQ not work"))
        }
        return next(e)
    }
}


module.exports = { createOrder};
