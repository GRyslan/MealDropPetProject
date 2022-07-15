const User = require("../models/userModel");
const ApiError = require("../classes/errorClass");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

async function register(email, name, password) {
    const userExist = await User.findOne({email});
    if (userExist) {
        throw ApiError.badRequest("Email already exist");
    }
    const hashPassword = await bcrypt.hash(password, 5);
    const newUser = await User.create({email, name, password:hashPassword});
    const tokens = await createJWT(newUser);
    return tokens;
}

async function login(email, password) {
    const userExist = await User.findOne({email});
    if (!userExist) {
        throw ApiError.notFound("Email not exist");
    }
    const equalPassword = await bcrypt.compare(password,userExist.password)
    if (!equalPassword) {
        throw ApiError.notFound("Password not match");
    }
    const tokens = await createJWT(userExist);
    return tokens;
}

async function logout(token) {
    await User.findOneAndUpdate({refreshToken: token}, {$unset: {"refreshToken": 1}});
}

async function refresh(refreshToken) {
    try {
        if (!refreshToken) {
            throw ApiError.unauthorized("User not authorized");
        }
        await jwt.verify(refreshToken, process.env.REFRESH_SECRET_KEY);
        const userToken = await User.findOne({refreshToken});
        if (!userToken) {
            throw ApiError.unauthorized("User not authorized");
        }
        const tokens = await createJWT(userToken);
        return tokens;
    } catch {
        await User.findOneAndUpdate({refreshToken}, {$unset: {"refreshToken": 1}});
        throw ApiError.unauthorized("User not authorized");
    }
}

async function createJWT(userExist) {
    //create payload
    const {email, name} = userExist;
    const payload = {
        email, name
    };
    const accessToken = jwt.sign(payload, process.env.ACCESS_SECRET_KEY, {expiresIn: "20s"});
    const refreshToken = jwt.sign(payload, process.env.REFRESH_SECRET_KEY, {expiresIn: "30d"});
    await userExist.updateOne({refreshToken});
    return {accessToken, refreshToken,user:{name, email}};
}

async function findAllUsers() {
    const users = await User.find();
    return users;
}
module.exports = {
    findAllUsers, login, register, logout, refresh
};
