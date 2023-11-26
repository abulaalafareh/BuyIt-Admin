const mongoose = require("mongoose");
const { Schema } = mongoose;

const ProductSchema = new Schema({
  name: {
    type: String,
    required: true,
  },

  category: {
    type: String,
    required: true,
  },

  total: {
    type: String,
    required: true,
  },

  remaining: {
    type: String,
    required: true,
  },
  images: {
    type: Array,
    required: true,
  },
  size_quantity: {
    type: Object,
    required: true,
  },
  sale: {
    type: String,
  },
});
const Product = mongoose.model("product", ProductSchema);
Product.createIndexes();
module.exports = Product;
