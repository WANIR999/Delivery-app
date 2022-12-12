const payment = require('../model/Payment');
const dotenv = require('dotenv').config();
const stripe = require('stripe')(process.env.STRIPE_KEY)

const GetAllPayments= async(req,res)=>{
    const payments= await payment.find()
     res.json(payments)
   }

const createCheckoutSession = async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price_data: {
          currency: 'usd',
          product_data: {
            name: 'T-shirt',
          },
          unit_amount: 2000,
        },
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: 'http://localhost:3000/checkout-success',
    cancel_url: 'http://localhost:3000/cart',
  });

  /* Sending the session url to the client. */
  res.send({url: session.url});
};

module.exports= {GetAllPayments, createCheckoutSession}
