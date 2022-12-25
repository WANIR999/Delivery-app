const router= require('express').Router();
const {GetAllplats, Createplat,getplat, updateplat, deleteplat}=require('../../controller/platsController')
const verification=require('../middelwares/token_verification')
const {tryCatch}=require('../middelwares/errorHandler/tryCatch')
const errorHandler=require('../middelwares/errorHandler/errorhandler')
const multer= require('multer')
const upload= require('../middelwares/uploads')
const fs= require("fs")

router.get('/allplats',GetAllplats)

router.post('/Create',upload.single('file'),Createplat)
router.post('/update',upload.single('file'),updateplat)
router.post('/getone',getplat)
router.post('/removeone',deleteplat)

router.use(errorHandler)

module.exports= router;
