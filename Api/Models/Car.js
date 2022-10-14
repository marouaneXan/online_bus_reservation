const mongoose=require('mongoose')
const carSchema=mongoose.Schema({
    car_name:{
        type:String,
        required:[true,"Please add a car name field"]
    },
    nbr_places:{
        type:Number,
        required:[true,"Please add a number of places field"]
    },
    car_image:{
        type:String,
        required:[true,"Please add a image field"]
    },
})
module.exports = mongoose.model("Car", carSchema);