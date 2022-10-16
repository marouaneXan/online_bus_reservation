const express=require('express')
const router = express.Router()
const {addCompany}=require('../Controllers/CompanyController')
router.post('/',addCompany)
module.exports=router