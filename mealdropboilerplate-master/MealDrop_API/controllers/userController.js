const userService = require("../services/userService");
const jwt = require("jsonwebtoken");

async function registerUser(req, res) {
    try {
        const {email, name, password} = req.body;
        const userExist = await userService.findUser(email);
        if (userExist) {
            return res.status(400).json({message: "Email already exist"});
        }
        const newUser = await userService.createUser(email, name, password);
        return res.status(201).json({message: `Registration successful + ${newUser}`});
    } catch (e) {
        console.log(e);
        return res.status(400).json({message: "Registration error"});
    }

}

async function loginUser(req, res) {
    try {
        const {email, password} = req.body;
        const userExist = await userService.findUser(email);
        if (!userExist) {
            return res.status(400).json({message: "Email not exist"});
        }
        if (password !== userExist.password) {
            return res.status(400).json({message: "Password not match"});
        }
        const token = createJWT(email, userExist.name);
        return res.json({message: "Login successful", token});
    } catch (e) {
        console.log(e);
        return res.status(400).json({message: "Login error"});
    }
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

module.exports = {registerUser, loginUser};
