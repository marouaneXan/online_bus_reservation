const express=require('express')
const { getAllReservations, makeReservation, cancelReservation } = require('../Controllers/ReservationController')
const {protectClient}=require('../Middleware/ClientMiddleware')
const {protectAdmin}=require('../Middleware/AdminMiddleware')
const router = express.Router()
router.get('/',protectAdmin,getAllReservations)
router.post('/:trip_id/:client_id',protectClient,makeReservation)
router.delete('/:reservation_id/:trip_id/:client_id',protectClient,cancelReservation)
module.exports=router