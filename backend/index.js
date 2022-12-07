
const express=require('express')
const app=express()
const db=require('./config/db')
const cors=require('cors')
const auth= require('./router/routes/Auth')
const commands= require('./router/routes/CommandRoutes')
const users= require('./router/routes/UserRoutes')
const plats= require('./router/routes/PlatRoutes')
const payments= require('./router/routes/PaymentRoutes')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/api/auth',auth)
app.use('/api/user',users)
app.use('/api/plat',plats)
app.use('/api/payment',payments)

app.listen(8080);

module.exports= app
