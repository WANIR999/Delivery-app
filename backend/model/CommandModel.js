const mongoose=require("mongoose")

const CommandsSchema= new mongoose.Schema({
     plat_id:{
          type:mongoose.Schema.Types.ObjectId,
          ref:'plats',
          required:true
     },
     Client_id:{
          type: mongoose.Schema.Types.ObjectId,
          ref: 'user',
          required:true

     },
     Livreur_id:{
          type: mongoose.Schema.Types.ObjectId, 
          ref: 'user',
          required:true

     },
     Quantité:{
          type:Number,
          required:true,

     },
     Prix:{
      type:Number,
     //  required:true
     },
     Status_du_command:{
      type:String,
      required:true
     },
     date_Command :{
     type : Date, 
     default: Date.now 
}

})
const Command=mongoose.model("command",CommandsSchema)
module.exports=Command