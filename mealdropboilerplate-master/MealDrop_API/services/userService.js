const User = require("../models/userModel");

async function findUser(email) {
    try{
        const userExist = await User.findOne({email});
        return userExist;
    }
    catch(e){
        return e
    }

}

async function createUser(email, name, password) {
    try{
        const newUser = await User.create({email, name, password});
        console.log('Logged')
        return newUser;
    }
    catch(e){
        console.log(e);
        return false
    }

}

async function findAllUsers() {
    try{
        const users = await User.find();
        return users;
    }
    catch(e){
        return e
    }

}

module.exports = {
    findUser, createUser,findAllUsers
};
