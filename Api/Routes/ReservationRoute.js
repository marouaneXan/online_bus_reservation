const express=require('express')
const { getAllReservations, makeReservation, cancelReservation } = require('../Controllers/ReservationController')
const router = express.Router()
router.get('/',getAllReservations)
router.post('/:trip_id/:client_id',makeReservation)
router.delete('/:reservation_id/:trip_id/:client_id',cancelReservation)
module.exports=router