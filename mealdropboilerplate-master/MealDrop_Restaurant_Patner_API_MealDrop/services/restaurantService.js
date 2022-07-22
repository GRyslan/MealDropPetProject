const Restaurant = require("../models/restaurantModel");
const ApiError = require("../classes/errorClass");

/* used for adding 100 restaurants names to mongo

let massive = [];
for (let i=0;i<100;i++){
    massive.push({name:`restaurant${i}`})
}
await insertMany(massive)*/
async function createRestaurant(name) {
    const restaurantExist = await Restaurant.findOne({name});
    if (restaurantExist) {
        throw ApiError.badRequest("Restaurant with this name already registered");
    }
    const newRestaurant = await Restaurant.create({name});
    return newRestaurant;
}

async function findAllRestaurants(limit,skip) {
    const count = await Restaurant.countDocuments();
    const restaurants = await Restaurant.find().skip(skip).limit(limit);
    return {restaurants,count};
}
async function findOneRestaurant(name) {
    const restaurant = await Restaurant.findOne({name});
    return restaurant;
}

async function findRestaurant(name) {
    try {
        const userExist = await Restaurant.findOne({name});
        return userExist;
    } catch (e) {
        console.log(e);
        return false;
    }

}

module.exports = {createRestaurant, findAllRestaurants, findRestaurant,findOneRestaurant};
