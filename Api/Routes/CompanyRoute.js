const express=require('express')
const router = express.Router()
const {addCompany,getAllCompanies}=require('../Controllers/CompanyController')
router.post('/',addCompany)
router.get('/',getAllCompanies)
module.exports=router