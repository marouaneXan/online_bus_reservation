const mongoose=require('mongoose')
const adminSchema=mongoose.Schema({
    nom:{
        type:String,
        required:[true,"Please add a name field"]
    },
    email:{
        type:String,
        required:[true,"Please add a email field"],
        unique
    },
    password:{
        type:String,
        required:[true,"Please add a password field"]
    },
})
module.exports = mongoose.model("Admin",adminSchema)
