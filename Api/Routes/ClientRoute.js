const express=require('express')
const router=express()
const {deleteClient,getAllClients}=require('../Controllers/ClientController')
router.delete('/:client_id',deleteClient)
router.get('/',getAllClients)
module.exports=router