const User= require('../model/user')
const bcrypt=require('bcryptjs')
const localstorage = require('local-storage');
const jwt=require('jsonwebtoken')
const dotenv=require('dotenv')
const confirmation=require('../router/middelwares/veirfy_email')

const GetAllUsers= async(req,res)=>{
    const Users= await User.find()
     res.json(Users)
   }

   const CreateLiv=  async (req,res,next)=>{
    const {body}=req
    body.role="livreur"
    body.password="p@ssword1"
    body.confirmation=true
    const user= await User.findOne({email:body.email})
    if(user) throw Error('user exist already')
    const salt = await bcrypt.genSalt(10);
    const pass= await bcrypt.hash(body.password,salt)
    body.password=pass
    const creat= await User.create({...body})
    if(!creat) throw Error('user not created')
    res.json({msg:"created",
        data:creat
    })
}


   module.exports= {GetAllUsers,CreateLiv}