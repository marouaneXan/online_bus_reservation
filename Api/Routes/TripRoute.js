const express=require('express')
const {getAllTrips}=require('../Controllers/TripController')
const router = express.Router();

router.get('/',getAllTrips)
module.exports=router