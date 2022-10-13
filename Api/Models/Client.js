const mongoose=require('mongoose')
const clientSchema=mongoose.Schema({
    genre:{
        type:String,
        required:[true,"Please add a gendar field"]
    },
    
})