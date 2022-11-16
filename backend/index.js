const express = require('express')
const connectDB = require('./config/db')
const dotenv=require('dotenv')
const userRoutes=require('./routers/userRoute')
const { notFound, errorHandler } = require('./middlewares/errorMiddelewares')
const cors = require('cors')
const bodyParser = require('body-parser')



const app=express()
app.use(express.json())
dotenv.config()
app.use(bodyParser.json())
connectDB()
app.use(cors())



app.use('/',userRoutes)

// app.use(notFound)
// app.use(errorHandler)


const PORT=5000
app.listen(PORT,console.log(`connected ${PORT}`));
  