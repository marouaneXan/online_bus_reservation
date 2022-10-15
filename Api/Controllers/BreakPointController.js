const asyncHandler=require('express-async-handler')
const Break_Point=require('../Models/BreakPoint')
const Trip=require('../Models/Trip')
//@desc GET BreakPoint
//@route /api/v1/break_points
//@access public
const addBreakPoint=asyncHandler(async (req,res)=>{
    const {arrival_time,city_name,break_time,distance}=req.body
    if(!arrival_time || !city_name || !break_time || !distance){
        res.status(400)
        throw new Error('Please add all fields')
    }
    const trip=await Trip.findById(req.params.trip_id)
    if(!trip){
        res.status(400)
        throw new Error('Trip not found')
    }
})
module.exports={
    addBreakPoint
}
