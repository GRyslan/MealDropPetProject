const User = require("../models/userModel");

async function findUser(email) {
    try{
        const userExist = await User.findOne({email});
        return userExist;
    }
    catch(e){
        console.log(e);
        return false
    }

}

async function createUser(email, name, password) {
    try{
        const newUser = await User.create({email, name, password});
        return newUser;
    }
    catch(e){
        console.log(e);
        return false
    }

}

module.exports = {
    findUser, createUser
};
