const asyncHandler = require("express-async-handler");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Admin = require("../Models/Admin");
// @desc POST Login
// @route /api/v1/adminAuth/login
// access public
const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400);
    throw new Error("Please add all fields");
  }
  const admin = await Admin.findOne({ email });
  if (!admin) {
    res.status(400);
    throw new Error("Invalid admin data");
  }
  const isPasswordCorrect = await bcrypt.compare(
    req.body.password,
    admin.password
  );
  if (!isPasswordCorrect) {
    res.status(400);
    throw new Error("Password is incorrect");
  }
  if(admin && isPasswordCorrect){
    res.status(201).json({
        message:"Login successfully",
    })
  }else{
    res.status(400)
    throw new Error('Invalid Admin data')
  }
});

//Generate JWT 
const generateToken=(admin_id)=>{
    return jwt.sign({admin_id},process.env.JWT_SECRET,{
        expiresIn:"30d"
    })
}
module.exports = {
  login,
};
