const express = require("express")
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const app = express()
const bodyParser = require("body-parser")
app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
dotenv.config();
const connect = async () => {
    try{
        await mongoose.connect(process.env.MONGO);
        console.log("connected to mongoDB");
    }catch(error){
        // handleError(error)
        throw error;
    }
}
mongoose.connection.on("connected",()=>{
    console.log("mongoDB connected")
})

mongoose.connection.on("disconnected",()=>{
    console.log("mongoDB disconnected")
})
app.get("/",(req,res)=>{
    res.send("upload file")
})
app.listen(8080,()=>{
    connect()
    console.log("connected to backend");
})