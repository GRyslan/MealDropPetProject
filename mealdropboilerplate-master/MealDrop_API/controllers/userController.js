const userService = require("../services/userService");
const jwt = require("jsonwebtoken");
const ApiError = require("../classes/errorClass");


async function getAllUsers(req, res, next) {
    const allUsers = await userService.findAllUsers();
    if (allUsers instanceof Error) {
        return next(ApiError.internal("Error, while accessing database"));
    }
    return res.status(201).json(allUsers);


}

async function registerUser(req, res, next) {
    const {email, name, password} = req.body;
    const userExist = await userService.findUser(email);
    if (userExist) {
        return next(ApiError.badRequest("Email already exist"));
    }
    const newUser = await userService.createUser(email, name, password);
    return res.status(201).json({message: `Registration successful + ${newUser}`});


}

async function loginUser(req, res, next) {
    const {email, password} = req.body;
    const userExist = await userService.findUser(email, next);
    if (userExist instanceof Error) {
        return next(ApiError.internal("Error, while accessing database"));
    }
    if (!userExist) {
        return next(ApiError.notFound("Email not exist"));
    }
    if (password !== userExist.password) {
        return next(ApiError.notFound("Password not exist"));
    }
    const token = createJWT(email, userExist.name);
     return res.json({message: "Login successful", token});
}

function createJWT(email, name) {
    //create payload
    const payload = {
        email,
        name
    };
    const token = jwt.sign(payload, process.env.SECRET_KEY, {
        expiresIn: 3600
    });
    return token;
}

module.exports = {registerUser, loginUser, getAllUsers};
