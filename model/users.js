
const { date } = require("joi");
const mongoose = require("mongoose");
const users
= new mongoose.Schema({
name : { type:String},
user_id : { type:String , unique: true },
password : { type:String},
is_deleted : {type : Boolean , default : false}
},{
    timestamps :true
});

module.exports = mongoose.model("users", users);
