const asyncHandler = require("express-async-handler");
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken')

const User = require("../models/userModel");

// @desc    register an user
// @route   /api/users
// @access  public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    res.status(400);
    throw new Error({ message: "Pls include all fields." });
  }

  //Find if user is already exists

  const userExist = await User.findOne({ email });

  if (userExist) {
    res.status(400);
    throw new Error("User already exists");
  }

  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(password, salt);

  // create user
  const user = await User.create({
    name,
    email,
    password: hashPassword,
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error("Invalid user data");
  }
});

// @desc    login an user
// @route   /api/users
// @access  public
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const userExist = User.findOne({ email });

  // check user login data
  if (userExist && (await bcrypt.compare(password, userExist.password))) {
    res.status(200).json({
      _id: userExist._id,
      name: userExist.name,
      email: userExist_email,
      token: generateToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error("Credentials are wrong");
  }
});


// generate Token
const generateToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET, {
        expiresIn: '30d'
    })
}

// @desc    get current User
// @route   /api/users/me
// @access  private
const getMe = asyncHandler(async (req, res) => {
    res.status(401).json({
        id: req.user._id,
        name: req.user.name,
        email: req.user.email
    })
    }
)

module.exports = {
  registerUser,
  loginUser,
  getMe,
};
