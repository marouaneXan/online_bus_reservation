const express=require('express')
const router=express()
const {deleteClient,getAllClients, clientDetails}=require('../Controllers/ClientController')
const {protectAdmin}=require('../Middleware/AdminMiddleware')
router.delete('/:client_id',protectAdmin,deleteClient)
router.get('/',protectAdmin,getAllClients)
router.get('/:client_id',protectAdmin,clientDetails)
module.exports=router