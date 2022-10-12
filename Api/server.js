const express=require('express')
const dotenv=require('dotenv').config()
const PORT=process.env.PORT || 5000
const app=express()

//Routes
app.use('/api/v1/auth/',require('./Routes/AuthRoute'))

app.listen(PORT,()=>console.log('Server running at the PORT '+PORT))