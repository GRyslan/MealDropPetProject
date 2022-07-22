const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    name:{type:String,unique:true,required:true},
    /*newOrder: [{
        dish: {type: String},
        count: {type: Number},

    }],*/
    order:{pendingOrder:{type: Array,default:[]}},
    categories:{type: Array,default:[]}
});

module.exports = mongoose.model("restaurant", schema);
