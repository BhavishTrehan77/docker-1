const { default: mongoose } = require("mongoose")

const express=require('express')
const app=express()



async function connection(){
    await mongoose.connect('mongodb+srv://beatHubUser:Guruji%40707@beathubuser.yi1fp0a.mongodb.net/')
    console.log("db is connected successfully")
}
connection()

app.get("/",async(req,resp)=>{
    resp.send("welcome to express")
})


app.listen(3000)