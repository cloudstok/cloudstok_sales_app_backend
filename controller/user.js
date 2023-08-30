const user = require("../model/users");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config()

  const findUsers = async(req, res) => {
    try{
        let data = await user.find();
        return res.status(200).send({data : data})
    }catch(err){
        return res.status(400).send({Errer:err})
    }
  };

  const findUser = async(req, res) => {
    try{
        let data = await user.find({user_id : req.params.user_id});
        return res.status(200).send({data : data})
    }catch(err){
      console.log(err)
        return res.status(400).send({Errer:err})
    }
  };
    
  const register = async(req,res)=>{
    try{
        let {user_id ,password}=req.body;
        let [data] = await user.find({user_id : user_id});
        if(data){
          return res.status(200).send({msg: "you are already registered"})
        }
        const hash = await bcrypt.hash(password , 12)
                  req.body.password = hash
                  await (new user(req.body)).save();
                  const token = jwt.sign({ data: data },process.env.TOKEN_SECRET_KEY );
                  return res.status(200).send({msg : "user created successfully",status:true , token  : token})
    }catch(err){
      console.log(err)
        return res.status(400).send({Errer:err})
    }

  }

  const login = async(req,res)=>{
    try{
        let {user_id ,password}=req.body;
        let [data] = await user.find({user_id : user_id});
        if(data){
         const match = await bcrypt.compare(password , data.password)
         if(match){
             const token = jwt.sign({ foo: 'bar' },process.env.TOKEN_SECRET_KEY );
             return res.status(200).send({msg : "user created successfully",status:true , token  : token})
         }
         return res.send("msg: wrong password")
        }
    }catch(err){
      console.log(err)
        return res.status(400).send({Errer:err})
    }

  }
  module.exports ={
    findUsers,
    findUser,
    register,
    login
  }