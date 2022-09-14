const restaurantService = require("../services/restaurantService");
const amqp = require("amqplib");
class RController{

    async addRestaurant(req, res, next) {
        try {
            const {name} = req.body;
            const restaurant = await restaurantService.createRestaurant(name);
            return res.status(201).json({message: "Registration successful", restaurant});
        } catch (e) {
            return next(e);
        }
    }

    async  getAllRestaurants(req, res, next) {
        try {
            const {limit, skip} = req.query;
            const allRestaurants = await restaurantService.findAllRestaurants(limit, skip);
            return res.status(200).json(allRestaurants);
        } catch (e) {
            return next(e);
        }
    }

    async  getOneRestaurant(req, res, next) {
        try {
            const {id} = req.params;
            const oneRestaurant = await restaurantService.findOneRestaurant(id);
            return res.status(200).json(oneRestaurant);
        } catch (e) {
            return next(e);
        }
    }
    async  updateOneRestaurant(req, res, next) {
        try {
            const {id} = req.params;
            const {name} = req.body;
            console.log(id)
            console.log(name)
            const restaurant = await restaurantService.updateOneRestaurant(id,name);
            return res.status(200).json({message: "Updated",restaurant});
        } catch (e) {
            return next(e);
        }
    }
    async  deleteOneRestaurant(req, res, next) {
        try {
            const {id} = req.params;
            await restaurantService.deleteOneRestaurant(id);
            return res.status(200).json({message: "DELETED"});
        } catch (e) {
            return next(e);
        }
    }


    async  sendOrderToAgent(req, res,queue="completedOrder") {
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
}


module.exports = new RController();
