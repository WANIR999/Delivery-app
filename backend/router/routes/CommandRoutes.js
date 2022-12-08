const router= require('express').Router();
const {AjouterCommand,UpdateCommand,DeletCommand,AllCommand}=require("../../controller/CommandController")
const verification=require('../middelwares/token_verification')
const {tryCatch}=require('../middelwares/errorHandler/tryCatch')
const errorHandler=require('../middelwares/errorHandler/errorhandler')
tryCatch()
router.post('/ajouterCommand',tryCatch(AjouterCommand))
router.put('/updateCommand/:id',tryCatch(UpdateCommand))
router.delete('/deletCommand/:id',tryCatch(DeletCommand))
router.get('/allCommand',tryCatch(AllCommand))


router.use(errorHandler)

module.exports = router;
