const express = require("express");
const http = require("http");
const cors = require("cors");
const userRouter = require("./routes/user.route");
const app = express()
const {connection} = require("./config/db")

const dotenv = require("dotenv");
dotenv.config();

app.use(cors());

app.use(express.urlencoded({extended:true}))
app.use(express.json());

app.use("/", userRouter);

app.get("/",(req,res)=>{
    res.send("Namaste Server")
})

app.listen(process.env.PORT, async()=>{
    try{
        await connection
        console.log(`Server is running at localhost on port ${process.env.PORT}`)
    }
    catch(err){
        console.log(`Error in running server on ${process.env.PORT}`)
    }
})
