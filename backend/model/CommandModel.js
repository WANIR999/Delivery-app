const mongoose=require("mongoose")

const CommandsSchema= new mongoose.Schema({
   plat_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'plats'
   },
   Client_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
   },
   Livreur_id:{
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'users'
   },
   Quantité:{
        type:Number,
        required:true
   },
   Prix:{
    type:Number,
    required:true
   },
   Date :{
    type: Date,
    default: Date.now,
   },


})
const Command=mongoose.model('Command',CommandsSchema)
module.exports=Command