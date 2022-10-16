const express=require('express')
const router = express.Router()
const {addCompany,getAllCompanies,updateCompany,deleteCompany}=require('../Controllers/CompanyController')
router.post('/',addCompany)
router.get('/',getAllCompanies)
router.put('/company_id',updateCompany)
router.delete('/company_id',deleteCompany)
module.exports=router