const express=require('express')
const dotenv=require('dotenv').config()
const PORT=process.env.PORT || 5000
const app=express()

//mongodb connection
const connectDB =require('./Config/db')
connectDB()

//Routes
app.use('/api/v1/auth/',require('./Routes/AdminAuthRoute'))

app.listen(PORT,()=>console.log('Server running at the PORT '+PORT))