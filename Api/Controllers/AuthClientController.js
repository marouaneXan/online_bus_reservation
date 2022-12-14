const asyncHandler = require("express-async-handler");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Client = require("../Models/Client");

//@desc POST register
//@route /api/v1/clientAuth/register
//@access private
const register = asyncHandler(async (req, res) => {
  const {
    nom,
    prenom,
    genre,
    email,
    date_naissance,
    tel,
    adress,
    ville,
    nationalite,
    password,
  } = req.body;
  if (
    !nom ||
    !prenom ||
    !genre ||
    !email ||
    !date_naissance ||
    !tel ||
    !adress ||
    !ville ||
    !nationalite ||
    !password
  ) {
    res.status(400);
    throw new Error("Please add all fields");
  }
  const clientExist = await Client.findOne({ email });
  if (clientExist) {
    res.status(400);
    throw new Error("Oops!! Email already taken");
  }

  //Hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  //Create client
  const client = await Client.create({
    nom,
    prenom,
    genre,
    email,
    date_naissance,
    tel,
    adress,
    ville,
    nationalite,
    password: hashedPassword,
  });
  if (client) {
    res
      // .cookie("access_token", generateToken(client._id), {
      //   {
      //     httpOnly: true,
      //     secure: true,
      //     sameSite: "none",
      //   }
      // })
      .status(201)
      .json({
        message: "Account created successfully",
        client: client._id,
        token: generateToken(client._id),
      });
  }
});

// @desc POST Login
// @route /api/v1/adminAuth/login
// access public
const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400);
    throw new Error("Please add all fields");
  }
  const client = await Client.findOne({ email });
  if (!client) {
    res.status(400);
    throw new Error("Invalid Client data");
  }
  const isPasswordCorrect = await bcrypt.compare(
    req.body.password,
    client.password
  );
  if (!isPasswordCorrect) {
    res.status(400);
    throw new Error("Password is incorrect");
  }
  if (client && isPasswordCorrect) {
    res
      // .cookie("access_token", generateToken(client._id), {
      //   httpOnly: true,
      // })
      .status(201)
      .json({
        message: "Login successfully",
        client: client._id,
        token: generateToken(client._id),
      });
  } else {
    res.status(400);
    throw new Error("Invalid Client data");
  }
});

//Generate JWT
const generateToken = (client_id) => {
  return jwt.sign({ client_id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};
module.exports = {
  register,
  login,
};
