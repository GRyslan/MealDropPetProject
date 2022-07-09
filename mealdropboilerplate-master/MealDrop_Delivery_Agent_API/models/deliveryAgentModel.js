const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    name:{type:String,unique:true,required:true},
    newOrder: [{
        dish: {type: String},
        count: {type: Number},

    }],
    orders:{toBePicked:{type: Array,default:[]}}
});

module.exports = mongoose.model("agents", schema);
