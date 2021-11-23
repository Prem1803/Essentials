const express = require("express");
const User = require("../models/User");
const Product = require("../models/Product");
const UserRouter = new express.Router();
const upload = require("../utils/upload");
const { auth } = require("../middlewares/authMiddleware");
const {
  getTrimmedMobileNumber,
  validateEmail,
  validateMobileNumber,
} = require("../utils/helperFunction");

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
        if (mediaFiles[0]) user.profile = mediaFiles[0];
      }
      for (const update of updateObject) {
        if (update === "email") {
          const { email } = req.body;
          if (!validateEmail(email)) throw new Error("Invalid Email");
          const emailInDB = await User.findOne({ email });
          if (emailInDB && emailInDB._id.toString() !== userId.toString()) {
            throw new Error("Email is already registered.");
          }
          user.email = email;
        } else if (update === "mobileNumber") {
          let mobileNumber = getTrimmedMobileNumber(req.body[update]);
          if (!validateMobileNumber(mobileNumber))
            throw new Error("Invalid Mobile Number");
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
          if (!validateMobileNumber(user.alternateMobileNumber))
            throw new Error("Invalid Alternate Mobile Number");
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

UserRouter.post("/addToCart", auth, async (req, res) => {
  try {
    let { products } = req.body;
    if (!products) products = [];

    const userId = req.user._id;
    let user = await User.findOne({ _id: userId });
    for (const product of products) {
      let { _id, quantity } = product;
      if (!quantity) quantity = 1;
      if (_id) user.cart.set(_id.toString(), { quantity });
    }
    await user.save();
    res.status(200).send({ cart: user.cart });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});
UserRouter.post("/removeFromCart", auth, async (req, res) => {
  try {
    let { product } = req.body;
    if (!product) throw new Error("Product is missing");
    const userId = req.user._id;
    let user = await User.findOne({ _id: userId });
    user.cart.delete(product);
    await user.save();
    res.status(200).send({ cart: user.cart });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});
UserRouter.get("/getCartItems", auth, async (req, res) => {
  try {
    const userId = req.user._id;
    let user = await User.findOne({ _id: userId });
    let cartItems = user.cart;
    const cart = [];
    for (const [key, value] of cartItems) {
      const product = await Product.findOne({ _id: key });
      cart.push({
        _id: product._id,
        name: product.name,
        description: product.description,
        image: product.images[0],
        amount: product.amount,
        quantity: value.quantity,
      });
    }
    res.status(200).send({ cart });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

UserRouter.post("/addToWishlist", auth, async (req, res) => {
  try {
    let { product } = req.body;
    const userId = req.user._id;
    let user = await User.findOne({ _id: userId });
    if (product) {
      user.wishlist.set(product.toString(), { date: new Date("2021-11-10") });
    }
    await user.save();
    res.status(200).send({ wishlist: user.wishlist });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});
UserRouter.post("/removeFromWishlist", auth, async (req, res) => {
  try {
    let { product } = req.body;
    const userId = req.user._id;
    let user = await User.findOne({ _id: userId });
    if (product) user.wishlist.delete(product);
    await user.save();
    res.status(200).send({ wishlist: user.wishlist });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});
UserRouter.get("/getWishlist", auth, async (req, res) => {
  try {
    const userId = req.user._id;
    let user = await User.findOne({ _id: userId });
    let wishlistItems = user.wishlist;
    const wishlist = [];
    for (const [key, value] of wishlistItems) {
      const product = await Product.findOne({ _id: key });
      wishlist.push({
        _id: product._id,
        name: product.name,
        description: product.description,
        image: product.images[0],
        amount: product.amount,
      });
    }
    res.status(200).send({ wishlist });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});
module.exports = UserRouter;
