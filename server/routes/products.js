const express = require("express");
const router = express.Router();
const User = require("../models/Products");
const { body, validationResult } = require("express-validator");
const Product = require("../models/Products");

router.post("/addProduct", async (req, res) => {
  console.log(req.body);
  try {
    let product = await User.findOne({ name: req.body.name });

    if (product) {
      return res.status(400).json({ error: "This product already exists" });
    }

    product = await Product.create({
      name: req.body.name,
      price: req.body.price,
      category: req.body.category,
      total: req.body.total,
      remaining: req.body.total,
      images: req.body.images,
      size_quantity: req.body.size_quantity,
      sale: req.body.sale,
    });
    res
      .status(201)
      .json({ message: "Product added successfully", data: product });
  } catch (error) {
    res.json(error.message);
    console.log(error.message);
  }
});

module.exports = router;
