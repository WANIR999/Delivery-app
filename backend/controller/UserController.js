const User= require('../model/user')

const GetAllUsers= async(req,res)=>{
    const Users= await User.find()
     res.json(Users)
   }


   module.exports= {GetAllUsers}