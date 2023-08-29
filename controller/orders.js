
const order = require("../model/orders");
  const findOrder = async(req, res) => {
    try{
        let data = await order.find();
        return res.status(200).send({data : data})
    }catch(err){
        return res.status(400).send({Errer:err})
    }
  };

  const findByIddOrder = async(req, res) => {
    try{
        let data = await order.findById(req.params.id);
        return res.status(200).send({data : data})
    }catch(err){
      console.log(err)
        return res.status(400).send({Errer:err})
    }
  };


  const createOrder = async(req, res) => {
    try{
       const data = new order(req.body);
      let {_id} =  await data.save();
       return res.status(200).send({msg : "Order created successfully",status:true , id : _id})
    }catch(err){
        return res.status(400).send({Errer:err,status:false})
    }
    
  };

  module.exports= {
    createOrder,
    findOrder,
    findByIddOrder
  }