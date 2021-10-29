const express = require("express");
const User = require("../models/User");
const UserRouter = new express.Router();
const upload = require("../utils/upload");
const { auth } = require("../middlewares/authMiddleware");
const { getTrimmedMobileNumber } = require("../utils/helperFunction");

UserRouter.get("/user", auth, async (req, res) => {
  try {
    const userId = req.user._id;
    const user = await User.findOne({ _id: userId });
    res.status(200).send({ user });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

UserRouter.post(
  "/user/updateDetails",
  auth,
  upload.array("media", 1),
  async (req, res) => {
    try {
      const updateObject = Object.keys(req.body);
      const userId = req.user._id;
      let user = await User.findOne({ _id: userId });
      const mediaFiles = [];
      if (req.files) {
        for (const file of req.files) {
          mediaFiles.push(file.filename);
        }
        user.profile = mediaFiles[0];
      }
      for (const update of updateObject) {
        if (update === "email") {
          const { email } = req.body;
          const emailInDB = await User.findOne({ email });
          if (emailInDB && emailInDB._id.toString() !== userId.toString()) {
            throw new Error("Email is already registered.");
          }
          user.email = email;
        } else if (update === "mobileNumber") {
          let mobileNumber = getTrimmedMobileNumber(req.body[update]);
          const mobileNumberInDB = await User.findOne({ mobileNumber });
          if (
            mobileNumberInDB &&
            mobileNumberInDB._id.toString() !== userId.toString()
          ) {
            throw new Error("Mobile number is already registered.");
          }
          user.mobileNumber = mobileNumber;
        } else if (update === "alternateMobileNumber") {
          user.alternateMobileNumber = getTrimmedMobileNumber(req.body[update]);
        } else if (
          update === "houseNumber" ||
          update === "area" ||
          update === "city" ||
          update === "state"
        ) {
          user.address[update] = req.body[update];
        } else {
          user[update] = req.body[update];
        }
      }
      await user.save();
      res.status(200).send({ user });
    } catch (error) {
      res.status(400).send({ error: error.message });
    }
  }
);

module.exports = UserRouter;
