const Agent=require("../models/deliveryAgentModel")
async function createAgent(name){
    try{
        const newUser = await Agent.create({ name});
        return newUser;
    }
    catch(e){
        console.log(e);
        return false
    }
}
async function findAllOrders() {
    const orders = await Agent.find();
    return orders;
}
async function findAgent(name) {
    try{
        const userExist = await Agent.findOne({name});
        return userExist;
    }
    catch(e){
        console.log(e);
        return false
    }

}

module.exports = {createAgent,findAgent,findAllOrders}
