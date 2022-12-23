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
          // type: mongoose.Schema.Types.ObjectId, 
          // ref: 'user',
          type:String,
          default:"Aucun livreur pour l'instant" 


     },
     Quantité:{
          type:Number,
          required:true,

     },

     Prix:{
          type:mongoose.Schema.Types.ObjectId,
          ref:'plats',
          required:true
          // type:Number,
          // required:true,
          

     },
     Montant_total:{
          type:Number,
          required:true,

     },
     achats_id:{
     type:mongoose.Schema.Types.ObjectId,
     ref:'achats',
     required:true,
     },
     date_Command :{
     type : Date, 
     default: Date.now 
}


     Status_du_command:{
      type:String,
      required:true
     },

})

const Command=mongoose.model("command",CommandsSchema)
module.exports=Command