const user = require("../model/users");
const bcrypt = require('bcrypt');
const { create_token } = require("../lib/jsonwebtoken");
const { hashPassword, comparePassword } = require("../lib/hash");
require('dotenv').config()

  const findUsers = async(req, res) => {
    try{
        let data = await user.find();
        return res.status(200).send({data : data})
    }catch(err){
      console.error(err)
        return res.status(400).send({Errer:err})
    }
  };

  const findUser = async(req, res) => {
    try{
        let data = await user.find({user_id : req.params.user_id});
        return res.status(200).send({data : data})
    }catch(err){
      console.Errer(err)
        return res.status(400).send({Errer:err})
    }
  };
    
  const register = async(req,res)=>{
    try{
        let {user_id ,password}=req.body;
        let [data] = await user.find({user_id : user_id});
        if(data){
          return res.status(409).send({msg: "you are already registered"})
        }
        req.body.password = await hashPassword(password)
                  await (new user(req.body)).save();
                  const token = await create_token(data);
                  return res.status(200).send({msg : "new user add successfully",status:true , token  : token})
    }catch(err){
        console.error(err)
        return res.status(400).send({Errer:err})
    }

  }

  const login = async(req,res)=>{
    try{
        let {user_id ,password}=req.body;
        let [data] = await user.find({user_id : user_id});
        if(data){
         const match = await comparePassword(password , data.password)
         if(match){
             const token = await create_token(data);
             return res.status(200).send({msg : "user login  successfully",status:true , token  : token})
         }
         return res.send("msg: wrong password")
        }
    }catch(err){
     console.error(err)
        return res.status(400).send({Errer:err})
    }

  }
  module.exports ={
    findUsers,
    findUser,
    register,
    login
  }