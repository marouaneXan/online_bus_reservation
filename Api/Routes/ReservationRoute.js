const express=require('express')
const { getAllReservations, makeReservation } = require('../Controllers/ReservationController')
const router = express.Router()
router.get('/',getAllReservations)
router.post('/:trip_id/:client_id',makeReservation)
module.exports=router