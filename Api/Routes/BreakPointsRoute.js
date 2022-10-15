const express=require('express')
const router = express.Router();
const {addBreakPoint}=require('../Controllers/BreakPointController')
router.get('/:trip_id',addBreakPoint)
module.exports=router