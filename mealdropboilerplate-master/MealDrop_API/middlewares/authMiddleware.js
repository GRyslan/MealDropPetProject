const jwt = require("jsonwebtoken");
const ApiError = require("../classes/errorClass");

function verifyJWT(req, res, next) {
    if (req.method === "OPTIONS") {
        return next();
    }
    try {
        const token = req.headers.authorization.split(" ")[1];
        if (!token) {
            return next(ApiError.unauthorized("User not authorized"));
        }
        jwt.verify(token, process.env.ACCESS_SECRET_KEY);
        return next();
    } catch (e) {
        return next(ApiError.unauthorized("User not authorized"));
    }
}

module.exports = {verifyJWT};
