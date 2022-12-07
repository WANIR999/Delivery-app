const mongoose=require("mongoose")

const achatSchema= new mongoose.Schema({
   payment_id:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'Commands'
   },
   command_id:{
        type:String,
   },
   statu:{
        type:Boolean,
   },
})
const Achat=mongoose.model("Achat",achatSchema)
module.exports=Achat