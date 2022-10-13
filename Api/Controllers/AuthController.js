// @desc POST Register
// @route /api/v1/auth/register
// access public
const register=async(req,res)=>{
    res.send('register')
}
// @desc POST Login
// @route /api/v1/auth/login
// access public
const login=async(req,res)=>{
    res.send('login')
}
module.exports={
    register,
    login
}