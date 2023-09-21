require('dotenv').config()
const jwt = require('jsonwebtoken')
const verify_token = (req ,res , next)=>{
    try{
        const tokenHeader = req.headers.authorization;
        if(!tokenHeader)
        return res.status(401).json({"message":"Token not found"});
        const token = tokenHeader.split(" ")[1];
        const verifiedToken = jwt.verify(token, process.env.TOKEN_SECRET_KEY);
        if(!verifiedToken)
          return res.status(401).json({ "message":"invalid token"})
        res.locals.auth = verifiedToken;
        next()
    }catch(err){
        console.log(err)
    }
}


const create_token = (data)=>{
    try{
        const token = jwt.sign({data : data} ,process.env.TOKEN_SECRET_KEY );
        return token
    }catch(err){
        console.log(err)
    }
}

module.exports ={
    verify_token,
    create_token
}