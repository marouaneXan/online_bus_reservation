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


//***************************************Global Routes *********************************/
//Admin Route
app.use('/api/v1/adminAuth/',require('./Routes/AdminAuthRoute'))

//Client Route
app.use('/api/v1/clientAuth/',require('./Routes/ClientAuthRoute'))

//Trip Route
app.use('/api/v1/trips',require('./Routes/TripRoute'))

//Car Route
app.use('/api/v1/cars',require('./Routes/CarRoute'))

//Company Route
app.use('/api/v1/companies',require('./Routes/CompanyRoute'))

//*************************************************************************************/


//Error handler
app.use(ErrorHandler)

app.listen(PORT,()=>console.log('Server running at the PORT '+PORT))