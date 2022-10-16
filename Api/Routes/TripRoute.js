const express=require('express')
const {getAllTrips, addTrip,updateTrip}=require('../Controllers/TripController')
const router = express.Router();
router.get('/',getAllTrips)
router.post('/:car_id/:company_id',addTrip)
router.put('/:trip_id',updateTrip)
module.exports=router