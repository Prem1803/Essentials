const express = require("express");
const User = require("../models/User");
const { getTrimmedMobileNumber } = require("../utils/helperFunction");
const AuthRouter = new express.Router();
AuthRouter.post("/user/signup", async (req, res) => {
  try {
    if (req.body.password.length < 8) {
      throw new Error("Password length must be of atleast 8 characters.");
    }
    let { fullName, email, mobileNumber, password } = req.body;
    fullName = fullName.trim();
    let firstName = fullName.split(" ")[0];
    let lastName = fullName.replace(firstName, "");
    lastName = lastName.trim();
    let userWithEmail = await User.findOne({ email });
    if (userWithEmail) throw new Error("This email is already registered.");
    mobileNumber = getTrimmedMobileNumber(mobileNumber);
    let userWithMobileNumber = await User.findOne({ mobileNumber });
    if (userWithMobileNumber)
      throw new Error("This mobile number is already registered.");
    const user = new User({
      firstName,
      lastName,
      email,
      mobileNumber,
      password,
    });
    await user.save();

    const token = await user.generateAuthToken();
    res.send({
      token: token,
    });
  } catch (e) {
    console.log(e);
    res.status(400).send({ error: e.message });
  }
});

AuthRouter.post("/user/login", async (req, res) => {
  try {
    const user = await User.findByCredentials(
      req.body.username,
      req.body.password
    );
    const token = await user.generateAuthToken();
    res.send({
      token: token,
    });
  } catch (e) {
    res.status(400).send({ error: e.message });
  }
});
module.exports = AuthRouter;
