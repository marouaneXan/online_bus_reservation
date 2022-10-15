const mongoose = require("mongoose");
const breakPointSchema=mongoose.Schema({
    arrival_time:{
        type:String,
        required:[true,"Please add arrival time field"]
    },
    city_name:{
        type:String,
        required:[true,"Please add a city name field"]
    }
})
module.exports = mongoose.model("Break_Point", breakPointSchema);