const express=require('express')
const router = express.Router()
const {addCompany,getAllCompanies,updateCompany,deleteCompany}=require('../Controllers/CompanyController')
const {protectAdmin}=require('../Middleware/AdminMiddleware')
router.post('/',protectAdmin,addCompany)
router.get('/',protectAdmin,getAllCompanies)
router.put('/:company_id',protectAdmin,updateCompany)
router.delete('/:company_id',protectAdmin,deleteCompany)
module.exports=router