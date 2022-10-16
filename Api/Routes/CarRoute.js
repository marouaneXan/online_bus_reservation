const express=require('express')
const router=express()
const {addCar, getAllCars,updateCar,deleteCar, carDetails}=require('../Controllers/CarController')
router.post('/',addCar)
router.get('/',getAllCars)
router.put('/:car_id',updateCar)
router.delete('/:car_id',deleteCar)
router.get('/:car_id',carDetails)
module.exports=router