const ApiError = require("../classes/errorClass");

function errorHandler(err, req, res,next) {
    if (err instanceof ApiError) {
        return res.status(err.status).json({message: err.message})
    }
    return next(res.status(500).json({message: "Unhandled error"}));
}
module.exports={errorHandler}
