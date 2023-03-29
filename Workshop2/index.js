const express = require('express');
const mongoose = require('mongoose');
const userRoute=require('./routes/user') 
const app = express();
//npm init
//npm i express mongoose nodemon dotenv

app.use(express.json());

//middleware
app.use('/api',userRoute);

app.get("/",(req,res)=>{
    res.send("Welcome");
})
//mongoose connect
mongoose.connect("mongodb://localhost:27017/player").then(()=>console.log('Conected to mongodb')).catch((error)=>console.error(error));
app.listen(3000, () => {
    console.log(`Server Started at ${3000}`)
})