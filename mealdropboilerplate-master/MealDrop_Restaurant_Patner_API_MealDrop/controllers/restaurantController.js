const restaurantService = require("../services/restaurantService")
const amqp = require("amqplib");
async function addRestaurant(req,res){
    try {
        const {name}=req.body;
        const restaurantExist = await restaurantService.findRestaurant(name);
        if (restaurantExist) {
            return res.status(400).json({message: "Restaurant already exist"});
        }
        const restaurantUser = await restaurantService.createRestaurant(name);
        return res.status(201).json({message: `Registration successful + ${restaurantUser}`});
    } catch (e) {
        console.log(e);
        return res.status(400).json({message: "Registration error"});
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
module.exports={addRestaurant,sendOrderToAgent}
