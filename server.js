const { default: mongoose } = require("mongoose")
require('dotenv').config()

const express=require('express')
const app=express()



async function connection(){
    await mongoose.connect(process.env.MONGO_URI)
    console.log("db is connected successfully")
}
connection()

app.get("/",async(req,resp)=>{
    resp.send("welcome to express")
})


app.listen(process.env.PORT)