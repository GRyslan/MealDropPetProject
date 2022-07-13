const userService = require("../services/userService");

async function registerUser(req, res, next) {
    try {
        const {email, name, password} = req.body;
        const newUser = await userService.register(email, name, password);
        res.cookie("refreshToken", newUser.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true});
        return res.status(201).json({message: "Registration successful", newUser});
    } catch (e) {
        return next(e);
    }
}

async function loginUser(req, res, next) {
    try {
        const {email, password} = req.body;
        const user = await userService.login(email, password);
        res.cookie("refreshToken", user.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true});
        return res.json({message: "Login successful", user});
    } catch (e) {
        return next(e);
    }
}

async function logoutUser(req, res, next) {
    try {
        const {refreshToken} = req.cookies;
        await userService.logout(refreshToken)
        res.clearCookie("refreshToken");
        return res.json({message:"logout successful"})
    } catch (e) {
        return next(e);
    }
}
async function refresh(req, res, next) {
    try {
        const {refreshToken} = req.cookies
        const token = await userService.refresh(refreshToken)
        res.cookie("refreshToken",token.refreshToken, {maxAge: 30*24*60*60*1000, httpOnly: true})
        return res.json(token)
    } catch (e) {
        return next(e)
    }
}
async function getAllUsers(req, res, next) {
    try{
        const allUsers = await userService.findAllUsers();
        return res.status(201).json(allUsers);
    }
    catch(e){
        return(next(e))
    }
}

module.exports = {registerUser, loginUser, getAllUsers,logoutUser,refresh};
