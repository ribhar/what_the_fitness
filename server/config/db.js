const dotenv = require("dotenv");
dotenv.config();
const mongoose = require("mongoose");
const connection = mongoose.connect(process.env.MONGO_URI)
.then(res=>console.log("Connection to the database"))
.catch(err=>console.log("error in connecting the database",err))

module.exports = connection;