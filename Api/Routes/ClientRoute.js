const express=require('express')
const router=express()
const {deleteClient,getAllClients, clientDetails}=require('../Controllers/ClientController')
router.delete('/:client_id',deleteClient)
router.get('/',getAllClients)
router.get('/:client_id',clientDetails)
module.exports=router