const express = require("express");
const User = require("../models/User");
const Category = require("../models/Category");
const CategoryRouter = new express.Router();
const upload = require("../utils/upload");

CategoryRouter.post(
  "/category/create",
  upload.array("media", 1),
  async (req, res) => {
    try {
      let image = "";
      if (req.files) {
        let mediaFiles = [];
        for (const file of req.files) {
          mediaFiles.push(file.filename);
        }
        image = mediaFiles[0];
      }
      const category = new Category({ ...req.body, image });
      await category.save();
      res.status(200).send({ category });
    } catch (error) {
      res.status(400).send({ error: error.message });
    }
  }
);

CategoryRouter.post(
  "/category/update",
  upload.array("media", 1),
  async (req, res) => {
    try {
      const { categoryId } = req.body;
      if (!categoryId) throw new Error("Category Id is required");
      let category = await Category.findOne({ _id: categoryId });
      if (!category) throw new Error("No such Category Found.");
      if (req.files) {
        let mediaFiles = [];

        for (const file of req.files) {
          mediaFiles.push(file.filename);
        }
        if (mediaFiles[0]) category.image = mediaFiles[0];
      }
      const updateObject = Object.keys(req.body);
      for (const update of updateObject) {
        category[update] = req.body[update];
      }
      console.log(category);
      await category.save();
      res.status(200).send({ category });
    } catch (error) {
      res.status(400).send({ error: error.message });
    }
  }
);

CategoryRouter.post("/category/delete", async (req, res) => {
  try {
    const { categoryId } = req.body;
    if (!categoryId) throw new Error("Category Id is required");
    let category = await Category.findOne({ _id: categoryId });
    if (!category) throw new Error("No such Category Found.");
    await category.delete();
    res.status(200).send({ category });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

CategoryRouter.get("/categories", async (req, res) => {
  try {
    let categories = await Category.find({});

    res.status(200).send({ categories });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

module.exports = CategoryRouter;
