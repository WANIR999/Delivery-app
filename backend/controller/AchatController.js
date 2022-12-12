const Achat  = require('../model/Achat')
const Command=require('../model/CommandModel')
const Payment=require('../model/Payment')

const GetAllachats= async(req,res)=>{
    const achats= await Achat.find()
    .populate([
      {
        path: 'payment_id',  
        model:Payment
    },
      {
        path: 'command_id', 
        model:Command
      }    
])

  // path: ['payment_id','command_id'],
  // model: [Payment,Command]
     res.json(achats)
   }

   const Updatestatus= async (req,res)=>{
    const {id}=req.body
    const achats = await Achat.findOne({_id:id})
    if(achats.statu=="en cours"){ 
    await Achat.findOneAndUpdate({_id : id},{statu:"livrée"})

      res.json({msg:'status updated'})
      }
      else{
        res.json({msg:'not updated'})
      }

   }
  
   module.exports= {GetAllachats,Updatestatus}
