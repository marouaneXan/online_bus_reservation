const express=require('express')
const router=express()
const {addCar, getAllCars,updateCar,deleteCar}=require('../Controllers/CarController')
router.post('/',addCar)
router.get('/',getAllCars)
router.put('/:car_id',updateCar)
router.delete('/:car_id',deleteCar)
module.exports=router