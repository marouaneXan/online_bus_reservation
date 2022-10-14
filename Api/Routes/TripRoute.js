const express=require('express')
const {getAllTrips, addTrip}=require('../Controllers/TripController')
const router = express.Router();
router.get('/',getAllTrips)
router.post('/:car_id',addTrip)
module.exports=router