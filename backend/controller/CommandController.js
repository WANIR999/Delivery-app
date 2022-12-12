const command=require('../model/CommandModel')
const client=require('../model/user')
const plats=require('../model/Plats')
const env=require('dotenv')
const { findOneAndUpdate, findOne } = require('../model/CommandModel')

const AjouterCommand=async(req,res)=>{
    const {body} = req
    const new_command=new command({
      ...body
    })
    const saveCommand=await new_command.save();
    if(saveCommand){
      res.json(saveCommand)
    }else{
          throw Error('Command not created')

    }      
}
const UpdateCommand=async(req,res)=>{
  const updatecommand=await command.updateOne({_id:req.params.id},{$set:req.body})
  if(updatecommand){
    res.json(updatecommand)
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
 const commands=await command.find()
    .populate([
      {
        path: 'plat_id',  
        model:plats
    },
      {
        path: 'Client_id', 
        model:client
      }, 
      {
        path: 'Livreur_id', 
        model:client
      }, 
    ])
  // if(commands){
    res.json(commands)
  // }else{
  //   throw Error('problem to get all data')
  // }
}
const commandClient=async(req,res)=>{  
  const {token}=req.body
  const tokn=jwt.verify(token,process.env.SECRET)
  // affichage ba9i 3ndi error fih 

    const CommandClient=await command.findOne({Client_id:tokn.id})
    .populate([
      {
        path: 'plat_id',  
        model:plats
    },
      {
        path: 'Client_id', 
        model:client
      }, 
      {
        path: 'Livreur_id', 
        model:client
      }, 
    ])
    if(CommandClient){
      res.json(CommandClient)
    }else{
      throw Error('Sorry vous avez pas de command') 
    }
  
 
}


module.exports={
    AjouterCommand,
    UpdateCommand,
    DeletCommand,
    AllCommand,
    commandClient

}
