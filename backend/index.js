const express=require('express')
const app=express()
const db=require('./config/db')
const cors=require('cors')
const auth= require('./router/routes/Auth')
const commands= require('./router/routes/commandroute')
const user= require('./router/routes/user')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/api/auth',auth)
app.use('/command',commands)






app.listen(8080);

module.exports= app