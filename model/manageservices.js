const mongoose = require("mongoose");
const manageservices
= new mongoose.Schema({
   
heading: { type:String},
amount: { type:String},
bandwidth : { type:String},
storage : { type:String},
accounts: { type:String},
host: { type:String},
support: { type:String},
description: { type:String},
is_deleted : {type : Boolean , default : false}
},{
    timestamps :true
});

module.exports = mongoose.model("manageservices", manageservices);
