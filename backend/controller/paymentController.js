const payment= require('../model/Payment')

const GetAllPayments= async(req,res)=>{
    const payments= await payment.find()
     res.json(payments)
   }


   module.exports= {GetAllPayments}