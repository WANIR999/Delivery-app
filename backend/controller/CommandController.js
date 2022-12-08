const command=require('../model/CommandModel')
const env=require('dotenv')

const AjouterCommand=async(req,res)=>{
        const {body} = req
        const new_command=new command({
          ...body
        })
        const saveCommand=await new_command.save();
        try {
          res.send(new_command)
        } catch (error) {
            res.send(error)

        }
      
      
      
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
