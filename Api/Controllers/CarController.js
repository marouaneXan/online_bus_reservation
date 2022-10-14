const asyncHandler = require("express-async-handler");
const Car=require('../Models/Car')
//@desc POST addCar
//@route /api/v1/cars
//@access private
const addCar=asyncHandler(async(req,res)=>{
    const {car_name,nbr_places,car_image}=req.body
    if(!car_name || !nbr_places || !car_image){
        res.status(400)
        throw new Error('Please add all fields')
    }
    const newCar=await Car.create(req.body)
    if(newCar)
        res.status(200).json(newCar)
})

//@desc POST addCar
//@route /api/v1/cars
//@access private
const getAllCars=asyncHandler(async(req,res)=>{
    const cars=await Car.find()
    res.status(200).json(cars)
})
module.exports={
    addCar,
    getAllCars
}