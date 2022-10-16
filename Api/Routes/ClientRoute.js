const express=require('express')
const router=express()
const {deleteClient}=require('../Controllers/ClientController')
router.post('/:client_id',deleteClient)
module.exports=router