const categorie= require('../model/Categorie')

const GetAllcategories= async(req,res)=>{
    const categories= await categorie.find()
     res.json(categories)
   }


   module.exports= {GetAllcategories}