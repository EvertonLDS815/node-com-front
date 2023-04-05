const Product = require("../models/Product");

const getall = async (req, res) => {
  const products = await Product.find();
  res.json(products);
};
const created = async (req, res) => {
  const newProduct = req.body;
  await Product.create(newProduct);
  res.status(201).json(newProduct);
};


module.exports = {
    getall,
    created
};