const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const Client = require("../Models/Client");
const protectClient = asyncHandler(async (req, res, next) => {
  let token = req.headers.cookie;
  if (token) {
    try {
      //Get Token from Header
      token = req.headers.cookie.split("access_token=")[1];
      //Verify Token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      //Get Client From Token
      req.client = await Client.findById(decoded.client_id).select("-password");
      if (req.client) next();
      else {
        res.status(401);
        throw new Error("Not authorized");
      }
    } catch (error) {
      console.log(error);
      res.status(401);
      throw new Error("Not authorized");
    }
  }
  if (!token) {
    res.status(401);
    throw new Error("Not authorized, No token");
  }
});
module.exports = { protectClient };
