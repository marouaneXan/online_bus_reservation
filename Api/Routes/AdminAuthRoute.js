const express=require('express')
const router = express.Router();
const {login}=require('../Controllers/AuthAdminController')
router.post('/login',login)
module.exports=router