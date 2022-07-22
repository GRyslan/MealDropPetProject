const restaurantService = require("../services/restaurantService");
const amqp = require("amqplib");

async function addRestaurant(req, res, next) {
    try {
        const {name} = req.body;
        const restaurant = await restaurantService.createRestaurant(name);
        return res.status(201).json({message: "Registration successful", restaurant});
    } catch (e) {
        return next(e);
    }
}

async function getAllRestaurants(req, res, next) {
    try {
        const {limit, skip} = req.query;
        const allRestaurants = await restaurantService.findAllRestaurants(limit, skip);
        return res.status(200).json(allRestaurants);
    } catch (e) {
        return next(e);
    }
}

async function getOneRestaurant(req, res, next) {
    try {
        const {id} = req.params;
        const oneRestaurant = await restaurantService.findOneRestaurant(id);
        return res.status(200).json(oneRestaurant);
    } catch (e) {
        return next(e);
    }
}

const queue = "completedOrder";

async function sendOrderToAgent(req, res) {
    try {
        const conn = await amqp.connect("amqp://localhost");
        const ch1 = await conn.createChannel();
        ch1.sendToQueue(queue, Buffer.from(JSON.stringify(req.body)));
        setTimeout(function () {
            conn.close();
            res.send("SENDED");
        }, 500);
    } catch (e) {
        console.log(e);
        return res.status(400).json({message: "Registration error"});
    }
}

module.exports = {addRestaurant, sendOrderToAgent, getAllRestaurants,getOneRestaurant};
