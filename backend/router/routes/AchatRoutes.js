const router= require('express').Router();
const {GetAllachats}=require('../../controller/AchatController')
const verification=require('../middelwares/token_verification')
const {tryCatch}=require('../middelwares/errorHandler/tryCatch')
const errorHandler=require('../middelwares/errorHandler/errorhandler')

router.get('/allachats',GetAllachats)

router.use(errorHandler)

module.exports= router;