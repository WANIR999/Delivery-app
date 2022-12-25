const Plat= require('../model/Plats')
const Categorie = require('../model/Categorie')
const { findById } = require('../model/CommandModel')
const fs= require('fs')
const GetAllplats= async(req,res)=>{
  const plats= await Plat.find()
    
    .populate({
      path:'categorie',
      model:Categorie
    })
     res.json(plats)
   }

const Createplat= async (req,res)=>{
  const {body}= req
  body.image=req.file.filename
  const plat= await Plat.create({...body})
  if(!plat) throw Error('not created')
   res.json({
    msg:"created",
    data:req.body,
  })
  console.log(body)
}
const getplat= async (req,res)=>{
  const {id}= req.body
 const plat= await Plat.findOne({_id:id})
   res.json({
    msg:"data",
    data:plat,
  })
}
const updateplat= async (req,res)=>{
  const {body}= req
 if(req.file===undefined){ body.image=body.oldfile}
 else if(req.file!==undefined) {body.image=req.file.filename}
  const plat= await Plat.findOne({_id:body.id})
  plat.name=body.name
  plat.categorie=body.categorie
  plat.Composent=body.Composent
  plat.prix=body.prix
  plat.image=body.image
  plat.save()

   res.json({
    msg:"updated",
    data:body,
  })
  
}

const deleteplat= async (req,res)=>{
  const {id}= req.body
  const palt= await Plat.findOne({_id:id})
  const removedimage= await unlink(`../public/${palt.image}`);
if(!removedimage) throw Error('image not removed')
  // const plat= await Plat.findOneAndDelete({_id:id})
  // if(!plat) throw Error('plat not removed')
  // console.log(id)
   res.json({
    msg:"deleted",
  })
  
}


   module.exports= {GetAllplats,Createplat,getplat,updateplat,deleteplat}