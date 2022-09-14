const Restaurant = require("../models/restaurantModel");
const ApiError = require("../classes/errorClass");

/* used for adding 100 restaurants names to mongo

let massive = [];
for (let i=0;i<100;i++){
    massive.push({name:`restaurant${i}`})
}
await insertMany(massive)*/
class SController {
    async createRestaurant(name) {
        const restaurantExist = await Restaurant.findOne({name});
        if (restaurantExist) {
            throw ApiError.badRequest("Restaurant with this name already registered");
        }
        const newRestaurant = await Restaurant.create({name});
        return newRestaurant;
    }

    async findAllRestaurants(limit, skip) {
        const count = await Restaurant.countDocuments();
        const restaurants = await Restaurant.find().skip(skip).limit(limit);
        return {restaurants, count};
    }

    async findOneRestaurant(name) {
        const restaurant = await Restaurant.findOne({name});
        return restaurant;
    }

    async deleteOneRestaurant(name) {
        const restaurant = await Restaurant.deleteOne({name});
        return restaurant;
    }

    async updateOneRestaurant(name, updateName) {
        console.log(name)
        console.log(updateName)
        const restaurant = await Restaurant.findOneAndUpdate({name}, {name: updateName}, {new: true});
        return restaurant;
    }
}


module.exports = new SController();
