const asyncHandler = require("express-async-handler");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

//@desc POST register
//@route /api/v1/clientAuth/register
//@access private
const register=asyncHandler(async(req,res)=>{
    res.send('register client')
})
module.exports={
    register
}

