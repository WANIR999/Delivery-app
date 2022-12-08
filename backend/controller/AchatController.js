
const Achat  = require('../model/Achat')
const Command=require('../model/CommandModel')
const Payment=require('../model/Payment')

const GetAllachats= async(req,res)=>{
    const achats= await Achat.find()
    .populate([
      {path:  'payment_id',  
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

   module.exports= {GetAllachats}
