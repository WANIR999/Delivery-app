const router= require('express').Router();
const {GetAllplats}=require('../../controller/platsController')
const verification=require('../middelwares/token_verification')
const {tryCatch}=require('../middelwares/errorHandler/tryCatch')
const errorHandler=require('../middelwares/errorHandler/errorhandler')

router.get('/allplats',GetAllplats)

router.use(errorHandler)

module.exports= router;
