const mongoose=require("mongoose")

const CommandsSchema= new mongoose.Schema({
     // plat_id:{
     //      type:mongoose.Schema.Types.ObjectId,
     //      ref:'plats'
     // },
     // Client_id:{
     //      type: mongoose.Schema.Types.ObjectId,
     //      ref: 'user'
     // },
     // Livreur_id:{
     //      type: mongoose.Schema.Types.ObjectId, 
     //      ref: 'user'
     // },
     Quantité:{
          type:Number,
          required:true
     },
     Prix:{
      type:Number,
      required:true
     },
     Status_du_command:{
      type:String,
      required:true
     },

})

const Command=mongoose.model('Command',CommandsSchema)
module.exports=Command