const mongoose = require("mongoose");
const { Schema } = mongoose;

const ProductSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },

  street: {
    type: String,
    required: true,
  },

  city: {
    type: String,
    required: true,
  },

  postal_code: {
    type: String,
    required: true,
  },
});
const Product = mongoose.model("product", ProductSchema);
Product.createIndexes();
module.exports = Product;
