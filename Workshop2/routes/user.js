const express = require('express');
const route=express.Router();
const player =require("../models/playerScheme")
const team =require("../models/teamSchema")

//create user
route.post('/player',(req,res)=>{
  const playeri = player(req.body);
  team.model.findById(req.body.team,(err,tf)=>{
    if(err){

    }
    if(tf){
      playeri=data;
    }
  })
  playeri.save().then((data)=>res.json(data)).catch((err)=>res.json({message:err}))
});

//create team
route.post('/team',(req,res)=>{
  const teamg = team.model(req.body);
  teamg.save().then((data)=>res.json(data)).catch((err)=>res.json({message:err}))
});

//get all user
route.get('/player',(req,res)=>{
    player.find().then((data)=>res.json(data)).catch((err)=>res.json({message:err}))
  });
//get user by id
route.get('/player/:id',(req,res)=>{
    const {id}=req.params; 
    player.findById(id).then((data)=>res.json(data)).catch((err)=>res.json({message:err}))
  });
//update user
route.put('/player/:id',(req,res)=>{
    const {id}=req.params; 
    const{name,description,equipo}=req.body;
    player.updateOne({ _id:id},{$set:{name,description,equipo}})
    .then((data)=>res.json(req.body))
    .catch((err)=>res.json({message:err}))
  });
  //delete user
route.delete('/player/:id',(req,res)=>{
    const {id}=req.params; 
    player.remove({ _id:id}).then((data)=>res.json("Elemento Eliminado")).catch((err)=>res.json({message:err}))
  });
  module.exports=route;
