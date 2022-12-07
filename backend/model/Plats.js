const mongoose=require("mongoose")

const PlatsSchema= new mongoose.Schema({
   name:{
        type:String,
   },
   categorie:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'categories'
   },
   Composent:{
        type:Text,
   },
   image:{
        type:Image,
   },
   Quantite:{
        type:Number, 
   },

})
const plats=mongoose.model("Plat",PlatsSchema)
module.exports=plats