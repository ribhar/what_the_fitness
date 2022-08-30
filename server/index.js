const express = require("express");
const app = express()
const connection = require("./config/db")

const dotenv = require("dotenv");
dotenv.config();

app.use(express.urlencoded({extended:true}))
app.use(express.json());

app.get("/",(req,res)=>{
    res.send("Namaste Server")
})

app.listen(process.env.PORT, async()=>{
    try{
        await connection
        console.log(`Server is running at localhost onon port ${process.env.PORT}`)
    }
    catch(err){
        console.log(`Error in running server on ${process.env.PORT}`)
    }
})
