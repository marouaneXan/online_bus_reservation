const mongoose=require('mongoose')
const reservationSchema=mongoose.Schema({
    reservation_date:{
        type:String,
        required:true
    },
    reservation_time:{
        type:String,
        required:true
    },
    trip:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"Trip"
    },
    client:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"Client"
    }
})
module.exports = mongoose.model("Reservation",reservationSchema)