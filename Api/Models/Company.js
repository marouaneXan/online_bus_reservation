const mongoose=require('mongoose')
const companySchema=mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please add a name of company"]
    }
})
module.exports=mongoose.model("Company",companySchema)