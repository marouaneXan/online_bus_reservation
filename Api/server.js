const express=require('express')
const dotenv=require('dotenv').config()
const PORT=process.env.PORT || 5000
const app=express()

//mongodb connection
const connectDB =require('./Config/db')
connectDB()

//body parser
app.use(express.json())
app.use(express.urlencoded({extended:false}))

//Routes
app.use('/api/v1/adminAuth/',require('./Routes/AdminAuthRoute'))

app.listen(PORT,()=>console.log('Server running at the PORT '+PORT))