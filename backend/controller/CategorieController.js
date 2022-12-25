const Categorie= require('../model/Categorie')

const GetAllcategories= async(req,res)=>{
    const categories= await Categorie.find()
     res.json(categories)
   }

   const CreateCat=  async (req,res,next)=>{
    const {body}=req
    const creat= await Categorie.create({...body})
    if(!creat) throw Error('Categorie not created')
    res.json({msg:"created",
        data:creat
    })
}
const getCat= async (req,res)=>{
    const {id}= req.body
   const cat= await Categorie.findOne({_id:id})
     res.json({
      msg:"data",
      data:cat,
    })
  }
   const RemoveCat=  async (req,res,next)=>{
    const {id}=req.body
    const rem= await Categorie.findOneAndRemove({_id:id})
    if(!rem) throw Error('Categorie not removed')
    res.json({msg:"removed"})
}

const updateCat= async (req,res)=>{
    const {body}= req
    const cat= await Categorie.findOne({_id:body._id})
    cat.label=body.label
    cat.save()
    if(!cat) throw Error('not updated')
     res.json({
      msg:"updated",
      data:body,
    })
    // console.log(body)
  }


   module.exports= {GetAllcategories, CreateCat,RemoveCat,getCat, updateCat}