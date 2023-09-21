//orders


const { object } = require("joi");
const mongoose = require("mongoose");
const orders
= new mongoose.Schema({
amount : { type:String},
configuration: {type: Object},
manageService : { type:Object},
user : {type : Object },
is_deleted : {type : Boolean , default : false},
status: {  type: String,  enum : ['OPEN', 'INPROGRESS' , "DONE" , "REOPEN"],  default: 'OPEN' }, 
},{
    timestamps :true
});

module.exports = mongoose.model("orders", orders);
