const express = require('express')
const cors = require('cors')
const router = require('./router')
const mongoose = require("mongoose");

const app = express()
require('dotenv').config()
const PORT = +process.env.PORT
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())
app.use(router)
const conn = async () =>
  await mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
if (conn()) {
  console.log("database connected");
}

app.listen(PORT , ()=>console.log(`server is running on port ${PORT} `))
  

