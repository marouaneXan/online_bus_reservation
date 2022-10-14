const mongoose = require("mongoose");
const routeSchema=mongoose.Schema({
    arrival_time:{
        type:String,
        required:[true,"Please add arrival time field"]
    },
    city_name:{
        type:String,
        required:[true,"Please add a city name field"]
    },
    distance:{
        type:String,
        required:[true,"Please add a distance field"]
    },
})
module.exports = mongoose.model("Route", routeSchema);