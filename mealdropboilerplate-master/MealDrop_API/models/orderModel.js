const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    userId: {type: mongoose.SchemaTypes.ObjectId, ref:"users"},
    orderNew:{type:String},
    order: {type:String},
    restaurantId:{type: mongoose.SchemaTypes.ObjectId, required: true}
});

module.exports = mongoose.model("orders", schema);
