const mongoose=require("mongoose")

const CommandsSchema= new mongoose.Schema({
   Produid_id:{
        type:String,
        required:true
   },
   Client_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
   },
   Livreur_id:{
     type: mongoose.Schema.Types.ObjectId, 
     ref: 'user'
   },
   Quantité:{
        type:Number,
        required:true
   },
   Montant_total :{
    type:Number,
    required:true
   },
   Achat_id:{
    type:String,
    required:true
   },
   Date :{
    type: Date,
    default: Date.now,
   },


})
const Command=mongoose.model("command",CommandsSchema)
module.exports=Command