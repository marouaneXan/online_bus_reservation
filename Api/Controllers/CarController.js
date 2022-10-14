const asyncHandler=require('../Middleware/ErrorMiddleware')
const Car=require('../Models/Car')
//@desc POST register
//@route /api/v1/clientAuth/register
//@access private
const addCar=asyncHandler(async(req,res)=>{
    const {car_name,nbr_places,car_image}=req.body
    
})