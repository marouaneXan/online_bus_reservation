const express=require('express')
const dotenv=require('dotenv').config()
const PORT=process.env.PORT || 5000
const {ErrorHandler}=require('./Middleware/ErrorMiddleware')
const app=express()

//mongodb connection
const connectDB =require('./Config/db')
connectDB()

//body parser
app.use(express.json())
app.use(express.urlencoded({extended:false}))

//Admin Routes
app.use('/api/v1/adminAuth/',require('./Routes/AdminAuthRoute'))

//Client Routes
app.use('/api/v1/clientAuth/',require('./Routes/ClientAuthRoute'))

//Trip Routes
app.use('/api/v1/trips',require('./Routes/TripRoute'))


//Error handler
app.use(ErrorHandler)

app.listen(PORT,()=>console.log('Server running at the PORT '+PORT))