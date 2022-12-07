const router= require('express').Router();
const {GetAllPayments}=require('../../controller/paymentController')
const verification=require('../middelwares/token_verification')
const {tryCatch}=require('../middelwares/errorHandler/tryCatch')
const errorHandler=require('../middelwares/errorHandler/errorhandler')

router.get('/allpayments',GetAllPayments)

router.use(errorHandler)

module.exports= router;