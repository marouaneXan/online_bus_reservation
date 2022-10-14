const express=require('express')
const router=express()
const {addCar, getAllCars}=require('../Controllers/CarController')
router.post('/',addCar)
router.get('/',getAllCars)
module.exports=router