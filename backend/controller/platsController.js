const Plat= require('../model/Plats')

const GetAllplats= async(req,res)=>{
    const plats= await Plat.find()
     res.json(plats)
   }


   module.exports= {GetAllplats}