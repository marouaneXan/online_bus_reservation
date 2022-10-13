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
    }
})