const express = require("express");
const router = express.Router();
const User = require("../models/Products");
// const fetchUser = require("../middleware/fetchUser");
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
    });

    const data = {
      user: {
        id: user.id,
      },
    };
    const Authentication = jwt.sign(data, JWT_SECRET);
    res.json({ Authentication });
  } catch (error) {
    res.json(error.message);
    console.log(error.message);
  }
});

module.exports = router;
