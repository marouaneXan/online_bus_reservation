const express=require('express')
const router=express()
const {addCar, getAllCars,updateCar}=require('../Controllers/CarController')
router.post('/',addCar)
router.get('/',getAllCars)
router.put('/car_id',updateCar)
module.exports=router