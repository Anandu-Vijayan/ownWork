const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
const generateToken = require("../utils/generateToken")


// create User

const signup = asyncHandler(async (req, res) => {
  const { firstName, lastName, phoneNumber, password, email } = req.body;
  console.log(req.body);
  const userExist = await User.findOne({ email })
  if (userExist) {
    res.status(400).json("Email already in use")
  } else {
    const user = await User.create({
      firstName, lastName, phoneNumber, password, email

    })
    if (user) {
      res.status(202).json({
        _id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        phoneNumber: user.phoneNumber,
        email: user.email,
        password: user.password,
        token: generateToken(user._id)

      })
    } else {
      res.status(400).json("error occurd")
    }

  }
});
// Login

const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email: email });
    if (user) {
      console.log(user);
      if (user.status) {
        const validity = await bcrypt.compare(password, user.password);
        if (!validity) {
          res.status(400).json("wrongPassword");
        } else {
          res.status(200).json({
            _id: user._id,
            firstName: user.firstName,
            lastName: user.lastName,
            phoneNumber: user.phoneNumber,
            email: user.email,
            password: user.password,
            token: generateToken(user._id)
          });
        }
      } else {
        res.status(404).json("user Blocked");
      }
    } else {
      res.status(404).json("User not exist");
    }
  } catch (error) {
    res.status(404).json("Entho kaariyathill pattitund");
  }
});

const newPost = (req, res) => { 
  console.log('req.body');
  console.log(req.file);
  res.json(true)
}

module.exports = { signup, login, newPost };
