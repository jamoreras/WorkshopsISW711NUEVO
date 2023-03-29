const express = require('express');
const route=express.Router();
const userScheme=require("../models/team")

//create team
route.post('/teams',(req,res)=>{
  const team=userScheme(req.body);
  team.save().then((data)=>res.json(data)).catch((err)=>res.json({message:err}))

});

//get all team
route.get('/teams',(req,res)=>{
    userScheme.find().then((data)=>res.json(data)).catch((err)=>res.json({message:err}))
  });
  //update team
route.put('/teams/:id',(req,res)=>{
    const {id}=req.params; 
    const{name,description}=req.body;
    userScheme.updateOne({ _id:id},{$set:{name,description}}).then((data)=>res.json(data)).catch((err)=>res.json({message:err}))
  });

//delete team
  route.delete('/teams/:id',(req,res)=>{
    const {id}=req.params; 
    userScheme.remove({ _id:id}).then((data)=>res.json(data)).catch((err)=>res.json({message:err}))
  });

module.exports=route;