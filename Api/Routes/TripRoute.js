const express=require('express')
const {searchTrip, addTrip,updateTrip,deleteTrip, tripDetails}=require('../Controllers/TripController')
const {protectAdmin}=require('../Middleware/AdminMiddleware')
const router = express.Router();
router.get('/',protectAdmin,searchTrip)
router.post('/:car_id/:company_id',protectAdmin,addTrip)
router.put('/:trip_id',protectAdmin,updateTrip)
router.delete('/:trip_id',protectAdmin,deleteTrip)
router.get('/:trip_id',tripDetails)
module.exports=router