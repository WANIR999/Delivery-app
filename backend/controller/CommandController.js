const commandModel=require('../model/CommandModel')
const env=require('dotenv')

const AjouterCommand=(req,res)=>{
res.send("ajouter command")

}
const UpdateCommand=(req,res)=>{
res.send("update command")
}
const DeletCommand=(req,res)=>{
res.send("Delet command")

}
const AllCommand=(req,res)=>{
res.send("All  command")

}

module.exports={
    AjouterCommand,
    UpdateCommand,
    DeletCommand,
    AllCommand
}
