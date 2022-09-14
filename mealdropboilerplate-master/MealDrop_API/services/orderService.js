const Order = require("../models/orderModel");

async function createOrder(userId, order, restaurantId) {
    const newOrder = await Order.create({userId, order, restaurantId});
    return newOrder;

}

module.exports = {createOrder};
