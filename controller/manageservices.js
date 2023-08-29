
const manageservices = require("../model/manageservices");
  const findallmanageservices = async(req, res) => {
    try{
        let data = await manageservices.find();
        return res.status(200).send({data : data})
    }catch(err){
        return res.status(400).send({Errer:err})
    }
  };

  module.exports= {
    findallmanageservices
  }