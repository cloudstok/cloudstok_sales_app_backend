//orders


const mongoose = require("mongoose");
const orders
= new mongoose.Schema({
name : { type:String},
vCPU : { type:String},
ram : { type:String},
storage : { type:String},
bandwidth : { type:String},
billing_Cycle : { type:String},
os : { type:String},
plan : { type:String},
amount : { type:String},
manage_Service_id : { type:String},
manageServiceName : { type:String},
manageServiceAmount : { type:String},
});

module.exports = mongoose.model("orders", orders);
