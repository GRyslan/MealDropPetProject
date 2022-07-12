const jwt = require("jsonwebtoken");

function verifyJWT(req, res, next) {
    if (req.method === "OPTIONS") {
        return next();
    }
    try {
        const token = req.headers.authorization.split(" ")[1];
        console.log(req.headers.authorization)
        console.log(req.headers)
        if (!token) {
            return res.status(403).json({message: "Not Logged"});
        }
        const payload = jwt.verify(token, process.env.SECRET_KEY);
        req.claims = payload;
        return next();
    } catch (e) {
        return res.status(403).json({message: "Not Logged"});
    }
}

module.exports = {verifyJWT};
