const command=require('../model/CommandModel')
const env=require('dotenv')
const { findOneAndUpdate } = require('../model/CommandModel')

const AjouterCommand=async(req,res)=>{
    const {body} = req
    const new_command=new command({
      ...body
    })
    const saveCommand=await new_command.save();
    if(saveCommand){
      res.send(saveCommand)
    }else{
          throw Error('Command not created')

    }      
}
const UpdateCommand=async(req,res)=>{
  const updatecommand=await command.updateOne({_id:req.params.id},{$set:req.body})
  if(updatecommand){
    res.send("update command is succss")
    }else{
    throw Error('Command not update')
  
}
}

const DeletCommand=async(req,res)=>{
  const deletcommand=await command.findOneAndDelete({
    _id:req.params.id
  })
  if(deletcommand){
    res.send("suppresion sucees")
  }else{
    throw Error('problem to  suppresion command')


  }
  
}
const AllCommand=async(req,res)=>{
 const data=await command.find();
  if(data){
    res.send(data)
  }else{
    throw Error('problem to get all data')
  }
}

module.exports={
    AjouterCommand,
    UpdateCommand,
    DeletCommand,
    AllCommand
}
