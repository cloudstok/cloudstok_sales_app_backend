const mongoose = require("mongoose");
const configurations
= new mongoose.Schema({
    name: { type:String},
    vCPU:{type:String},
    ram:{type:String},
    storage:{type:String},
    bandwidth:{type:String},
    cost_Monthly:{type:String},
    cost_Quarterly:{type:String},
    cost_yearly: {type:String},
    os: {type:String},
    plan: {type:String},
});

module.exports = mongoose.model("configurations", configurations);
