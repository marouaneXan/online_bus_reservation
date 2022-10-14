const express=require('express')
const router = express.Router();
const {register}=require('../Controllers/AuthClientController')
router.post('/register',register)
module.exports=router