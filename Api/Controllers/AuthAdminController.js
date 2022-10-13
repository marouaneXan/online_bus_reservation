const asyncHandler = require("express-async-handler");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
// @desc POST Register
// @route /api/v1/auth/register
// access public
const register=async(req,res)=>{
    res.send('register admin')
}
// @desc POST Login
// @route /api/v1/auth/login
// access public
const login=async(req,res)=>{
    res.send('login admin')
}
module.exports={
    register,
    login
}