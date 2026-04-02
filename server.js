const { default: mongoose } = require("mongoose")

const express=require('express')
const app=express()



async function connection(){
    await mongoose.connect('db:mongo//mongo:27017/masai')
    console.log("db is connected successfully")
}
connection()

app.get("/",async(req,resp)=>{
    resp.send("welcome to express")
})


app.listen(3000)