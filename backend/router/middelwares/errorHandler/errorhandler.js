const errorhandler= (error,req,res,next)=>{
    res.status(400).json({errmsg:error.message})
}

module.exports= errorhandler