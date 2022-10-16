const express=require('express')
const router = express.Router()
router.post('/',(req,res)=>{
    res.send('make reservation successfully')
})
module.exports=router