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
async function findAllRestaurants() {
    const restaurants = await Restaurant.find();
    return restaurants;
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

module.exports = {createRestaurant, findAllRestaurants, findRestaurant};
