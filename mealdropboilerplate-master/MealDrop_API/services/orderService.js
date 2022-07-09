const Order = require("../models/orderModel");

async function createOrder(userId,order,restaurantId) {
    try{
        const newUser = await Order.create({userId,order,restaurantId});
        return newUser;
    }
    catch(e){
        console.log(e);
        return false
    }

}
module.exports={createOrder}
