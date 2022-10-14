const express=require('express')
const router=express()
const {addCar}=require('../Controllers/CarController')
router.post('/',addCar)
module.exports=router