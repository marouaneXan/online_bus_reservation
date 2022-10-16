const asyncHandler = require("express-async-handler");
const Company=require('../Models/Company')

//@desc POST Company
//@route /api/v1/companies
//@access private
const addCompany=asyncHandler(async(req,res)=>{
    const {company_name}=req.body
    if(!company_name){
        res.status(400)
        throw new Error('Please add a company name field')
    }
    const newCompany=await Company.create({
        company_name,
    })
    if(newCompany)
      res.status(200).json(newCompany)
})

//@desc GET getAllCompanies
//@route /api/v1/companies
//@access private
const getAllCompanies = asyncHandler(async (req, res) => {
    const companies = await Company.find();
    res.status(200).json(companies);
  });
module.exports={
    addCompany,
    getAllCompanies
}

