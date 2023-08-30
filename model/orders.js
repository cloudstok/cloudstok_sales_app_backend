//orders


const mongoose = require("mongoose");
const orders
= new mongoose.Schema({
name : { type:String},
amount : { type:String},
configuration: {type: Object},
manageService : { type:Object},
user_id : {type : String ,  require : true},
is_deleted : {type : Boolean , default : false},
status: {  type: String,  enum : ['OPEN', 'INPROGRESS' , "DONE" , "REOPEN"],  default: 'OPEN' }, 
},{
    timestamps :true
});

module.exports = mongoose.model("orders", orders);
