const Restaurant=require("../models/restaurantModel")

async function createRestaurant(name){
    try{
        const newUser = await Restaurant.create({ name});
        return newUser;
    }
    catch(e){
        console.log(e);
        return false
    }
}
async function findRestaurant(name) {
    try{
        const userExist = await Restaurant.findOne({name});
        return userExist;
    }
    catch(e){
        console.log(e);
        return false
    }

}

module.exports = {createRestaurant,findRestaurant}
