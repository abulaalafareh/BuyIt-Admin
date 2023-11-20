const connectToMongo = require("./db");
const express = require("express");
const cors = require("cors");

connectToMongo();

const app = express();
const port = 5000;

app.use("../uploads", express.static("uploads"));
app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);

app.use("/admin/products", require("./routes/products"));

app.listen(port, () => {
  console.log(`BuyIt Admin listening on port http://localhost:${port}`);
});
