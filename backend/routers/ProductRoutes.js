const express = require("express");
const User = require("../models/User");
const Category = require("../models/Category");
const Product = require("../models/Product");
const ProductRouter = new express.Router();
const upload = require("../utils/upload");
const { auth } = require("../middlewares/authMiddleware");

ProductRouter.post(
  "/product/create",
  auth,
  upload.array("media", 5),
  async (req, res) => {
    try {
      const userId = req.user._id;
      let mediaFiles = [];
      if (req.files) {
        for (const file of req.files) {
          mediaFiles.push(file.filename);
        }
      }
      const { categoryId } = req.body;
      if (!categoryId) throw new Error("Category is Missing");
      const category = await Category.findOne({ _id: categoryId });
      if (!category) throw new Error("Category not found");
      const product = new Product({
        ...req.body,
        images: mediaFiles,
        category: category._id,
        owner: userId,
        features: JSON.parse(req.body.productFeatures),
        tags: JSON.parse(req.body.productTags),
        quantitiesLeft: req.body.quantity,
      });
      await product.save();
      res.status(200).send({ product });
    } catch (error) {
      res.status(400).send({ error: error.message });
    }
  }
);

ProductRouter.post(
  "/product/update",
  auth,
  upload.array("media", 5),
  async (req, res) => {
    try {
      const userId = req.user._id;
      const { productId } = req.body;
      if (!productId) throw new Error("Product Id is required");
      let product = await Product.findOne({ _id: productId, owner: userId });
      if (!product) throw new Error("No such Product Found.");
      if (req.files) {
        let mediaFiles = [];

        for (const file of req.files) {
          mediaFiles.push(file.filename);
        }
      }
      const updateObject = Object.keys(req.body);
      for (const update of updateObject) {
        if (update === "categoryId") {
          const { categoryId } = req.body;
          if (!categoryId) throw new Error("Category is Missing");
          const category = await Category.findOne({ _id: categoryId });
          if (!category) throw new Error("Category not found");
          product.category = category._id;
        } else if (update === "quantity") {
          product[update] = req.body[update];
          product.quantitiesLeft = req.body[update];
        } else product[update] = req.body[update];
      }
      await product.save();
      res.status(200).send({ product });
    } catch (error) {
      res.status(400).send({ error: error.message });
    }
  }
);

ProductRouter.post("/product/delete", auth, async (req, res) => {
  try {
    const userId = req.user._id;
    const { productId } = req.body;
    if (!productId) throw new Error("Product Id is required");
    let product = await Product.findOne({ _id: productId, owner: userId });
    if (!product) throw new Error("No such Product Found.");
    await product.delete();
    res.status(200).send({ product });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});
ProductRouter.post("/product/single", async (req, res) => {
  try {
    let { productId } = req.body;
    if (!productId) throw new Error("Product not found.");
    const product = await Product.findOne({
      _id: productId,
    }).populate({
      path: "reviews",
      populate: {
        path: "user",
        select: { firstName: 1, lastName: 1, profile: 1 },
      },
    });

    res.status(200).send({ product });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

ProductRouter.post("/products", async (req, res) => {
  try {
    let { categoryId, limit, search, page } = req.body;
    if (!limit) limit = 10;
    if (!search) search = "";
    if (!page || Number(page) < 1) page = 1;
    let products = [];
    let itemsToSkip = (Number(page) - 1) * Number(limit);
    let total = 0;
    if (categoryId) {
      products = await Product.find({
        category: categoryId,
        $or: [
          { name: { $regex: search, $options: "i" } },
          { description: { $regex: search, $options: "i" } },
          { features: { $regex: search, $options: "i" } },
        ],
      })
        .sort({ updatedAt: -1 })
        .skip(itemsToSkip)
        .limit(limit);
      total = await Product.find({
        category: categoryId,
        $or: [
          { name: { $regex: search, $options: "i" } },
          { description: { $regex: search, $options: "i" } },
          { features: { $regex: search, $options: "i" } },
        ],
      }).countDocuments();
    } else {
      products = await Product.find({
        $or: [
          { name: { $regex: search, $options: "i" } },
          { description: { $regex: search, $options: "i" } },
          { features: { $regex: search, $options: "i" } },
        ],
      })
        .sort({ updatedAt: -1 })
        .skip(itemsToSkip)
        .limit(limit);
      total = await Product.find({
        $or: [
          { name: { $regex: search, $options: "i" } },
          { description: { $regex: search, $options: "i" } },
          { features: { $regex: search, $options: "i" } },
        ],
      }).countDocuments();
    }
    res.status(200).send({ products, total });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

ProductRouter.get("/products/recent", async (req, res) => {
  try {
    let products = await Product.find({}).sort({ updatedAt: -1 }).limit(8);
    res.status(200).send({ products });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

ProductRouter.get("/products/popular", async (req, res) => {
  try {
    let products = await Product.find({ onSale: true })
      .sort({ updatedAt: -1 })
      .limit(8);
    res.status(200).send({ products });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

ProductRouter.post("/storeProducts", auth, async (req, res) => {
  try {
    let { search, page } = req.body;
    const limit = 10;
    if (!search) search = "";
    if (!page || Number(page) < 1) page = 1;
    let itemsToSkip = (Number(page) - 1) * Number(limit);
    const userId = req.user._id;

    let products = await Product.find({
      owner: userId,
      $or: [
        { name: { $regex: search, $options: "i" } },
        { description: { $regex: search, $options: "i" } },
        { features: { $regex: search, $options: "i" } },
      ],
    })
      .populate("category", { title: 1 })
      .sort({ updatedAt: -1 })
      .skip(itemsToSkip)
      .limit(limit);
    let total = await Product.find({
      owner: userId,

      $or: [
        { name: { $regex: search, $options: "i" } },
        { description: { $regex: search, $options: "i" } },
        { features: { $regex: search, $options: "i" } },
      ],
    }).countDocuments();

    res.status(200).send({ products, total });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});
module.exports = ProductRouter;
