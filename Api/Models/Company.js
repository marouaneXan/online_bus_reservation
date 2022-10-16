const mongoose=require('mongoose')
const companySchema=mongoose.Schema({
    company_name:{
        type:String,
        required:[true,"Please add a name of company"]
    }
})
module.exports=mongoose.model("Company",companySchema)