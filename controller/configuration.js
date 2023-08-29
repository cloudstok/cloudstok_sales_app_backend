
const config = require("../model/configuration");
  const findallconfiguration = async(req, res) => {
    try{
        let data = await config.find();
        return res.status(200).send({data : data})
    }catch(err){
        return res.status(400).send({Errer:err})
    }
  };

  module.exports= {
    findallconfiguration
  }