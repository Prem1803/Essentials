const express = require("express");
const User = require("../models/User");
const Order = require("../models/Order");
const OrderRouter = new express.Router();
const upload = require("../utils/upload");
const { auth } = require("../middlewares/authMiddleware");

const Product = require("../models/Product");
const Review = require("../models/Review");

OrderRouter.post("/order/create", auth, async (req, res) => {
  try {
    const userId = req.user._id;
    let { note } = req.body;
    if (!note) note = "";
    let user = await User.findOne({ _id: userId });
    let cart = user.cart;

    for (const [key, value] of cart) {
      const product = await Product.findOne({ _id: key });
      const order = new Order({
        product: key,
        amount: product.amount,
        quantity: value.quantity,
        note: note,
        user: userId,
      });
      await order.save();
    }
    user.cart = [];
    await user.save();
    res.status(200).send({ message: "Order Placed" });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

OrderRouter.post("/orders", auth, async (req, res) => {
  try {
    const userId = req.user._id;
    let { page } = req.body;
    if (!page) {
      page = 1;
    }
    const itemsToSkip = Number(page - 1) * 20;
    let orders = await Order.find({ user: userId })
      .populate("product")
      .populate("review")
      .sort({ createdAt: -1 })
      .skip(itemsToSkip)
      .limit(20);
    let total = await Order.find({ user: userId }).countDocuments();
    res.status(200).send({ orders, total });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

OrderRouter.post("/order/review", auth, async (req, res) => {
  try {
    const userId = req.user._id;
    let { order, product, review, rating, reviewId } = req.body;
    if (Number(rating) > 5) rating = 5;
    if (Number(rating) < 0) rating = 0;
    if (!order) throw new Error("Invalid order");
    let orderReview;
    let productInDB = await Product.findOne({ _id: product });
    if (reviewId) {
      orderReview = await Review.findOne({ _id: reviewId, user: userId });

      if (orderReview) {
        productInDB.ratingCount =
          productInDB.ratingCount - orderReview.rating + rating;
        orderReview.review = review;
        orderReview.rating = rating;
      } else {
        orderReview = new Review({
          order,
          product,
          review,
          rating,
          user: userId,
        });
        productInDB.totalReviews = productInDB.totalReviews + 1;
        productInDB.ratingCount = productInDB.ratingCount + rating;
      }
    } else {
      orderReview = new Review({
        order,
        product,
        review,
        rating,
        user: userId,
      });
      productInDB.totalReviews = productInDB.totalReviews + 1;
      productInDB.ratingCount = productInDB.ratingCount + rating;
    }
    await orderReview.save();
    await productInDB.save();

    res.status(200).send({ message: "Review Added" });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

module.exports = OrderRouter;
