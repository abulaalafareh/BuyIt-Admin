const mongoose = require("mongoose");
require("dotenv").config();

const mongoUri = process.env.MONGODB_URI;

const connectToMongo = () => {
  mongoose.connect(mongoUri);
  const db = mongoose.connection;
  db.on("error", console.error.bind(console, "MongoDB connection error:"));
  db.once("open", () => {
    console.log("connected to mongo successfully");
  });
};

module.exports = connectToMongo;
