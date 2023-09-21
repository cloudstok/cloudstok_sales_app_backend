const bcrypt = require('bcrypt');
const hashPassword = async(password)=>{
    try{
        return  await bcrypt.hash(password , 12)
    }catch(err){
        console.log(err)
    }
}
const comparePassword = async(password , hashPassword)=>{
    try{
        return await bcrypt.compare(password , hashPassword)
    }catch(err){
        console.log(err)
    }
}

module.exports = {
    hashPassword,
    comparePassword

}
