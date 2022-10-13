const mongoose=require('mongoose')
const clientSchema=mongoose.Schema({
    genre:{
        type:String,
        required:[true,"Please add a gendar field"]
    },
    nom:{
        type:String,
        required:[true,"Please add a firstname field"]
    },
    prenom:{
        type:String,
        required:[true,"Please add a lastname field"]
    },
    email:{
        type:String,
        required:[true,"Please add a email field"],
        unique:true
    },
    date_naissance:{
        type:String,
        required:[true,"Please add a birthday field"]
    },
    tel:{
        type:String,
        required:[true,"Please add a phone field"]
    },
    adress:{
        type:String,
        required:[true,"Please add a adress field"]
    },
    ville:{
        type:String,
        required:[true,"Please add a city field"]
    },
    nationalite:{
        type:String,
        required:[true,"Please add a country field"]
    },
    password:{
        type:String,
        required:[true,"Please add a password field"]
    }
})
module.exports=mongoose.model('Client',clientSchema)