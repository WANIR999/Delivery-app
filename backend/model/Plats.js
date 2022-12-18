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
        type:String,
   },
   image:{
        type:String,
   },
   Quantite:{
        type:Number, 
   },
   Prix:{
        type:Number, 
   },

})
const plats=mongoose.model("Plat",PlatsSchema)
module.exports=plats