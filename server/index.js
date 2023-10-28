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

app.use("/auth", require("./routes/usersAuth"));

app.listen(port, () => {
  console.log(`BuyIt listening on port http://localhost:${port}`);
});
