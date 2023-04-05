require("dotenv").config();
const connectToDB = require("./database/database");
const express = require("express");
const app = express();
const port = process.env.PORT || 5656;
const cors = require("cors");

app.use(express.json());
app.use(cors());
const Product = require("./model/Product");

connectToDB();

app.get("/", async (req, res) => {
  const products = await Product.find();
  res.json(products);
});
app.post("/", async (req, res) => {
  const newProduct = req.body;
  await Product.create(newProduct);
  res.status(201).json(newProduct);
});

app.listen(port, () =>
  console.log(`🚀 My Server is on port http://localhost:${port}`)
);
