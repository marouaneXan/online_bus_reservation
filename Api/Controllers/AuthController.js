// @desc POST Register
// @route /api/users
// access public
const register=async(req,res)=>{
    res.send('register')
}
// @desc POST Register
// @route /api/users
// access public
const login=async(req,res)=>{
    res.send('login')
}
module.exports={
    register,
    login
}