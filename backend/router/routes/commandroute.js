const router= require('express').Router();
const {AjouterCommand,UpdateCommand,DeletCommand,AllCommand}=require("../../controller/CommandController")
const {tryCatch}=require('../middelwares/errorHandler/tryCatch')
const errorHandler=require('../middelwares/errorHandler/errorhandler')

router.get('/ajouterCommand',AjouterCommand)
router.get('/updateCommand',UpdateCommand)
router.get('/deletCommand',DeletCommand)
router.get('/allCommand',AllCommand)

module.exports = router;
