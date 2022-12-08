const command=require('../model/CommandModel')
const env=require('dotenv')

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
const UpdateCommand=(req,res)=>{
res.send("update command")
}

const DeletCommand=async(req,res)=>{
  const deletcommand=await command.findOneAndDelete({
    id:req.params.id
  })
  if(deletcommand){
    res.send("suppresion sucees")
  }else{
     res.send('problem to  suppresion command')

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
