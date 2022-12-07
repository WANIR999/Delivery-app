
const Achat= require('../model/Achat')

const GetAllachats= async(req,res)=>{
    const achats= await Achat.find()
     res.json(achats)
   }

   module.exports= {GetAllachats}
