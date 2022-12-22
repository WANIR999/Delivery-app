const Plat= require('../model/Plats')

const GetAllplats= async(req,res)=>{
    const plats= await Plat.find()
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


   module.exports= {GetAllplats,Createplat}