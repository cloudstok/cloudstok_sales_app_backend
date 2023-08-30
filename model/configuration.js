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
    is_deleted : {type : Boolean , default : false}
},{
    timestamps :true
});

module.exports = mongoose.model("configurations", configurations);
