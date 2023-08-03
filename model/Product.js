const { Schema, model } = require("mongoose");

const loginSchema = new Schema({
  name: {
    type: String,
    require: true,
  },
  image: {
    type: String,
    require: true,
  },
});

module.exports = model("Product", loginSchema);
