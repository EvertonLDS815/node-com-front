const mongoose = require("mongoose");

const loginSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    image: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    quantity: {
        type: String,
        require: true
    },
    code: {
        type: String,
        require: true
    }
});

module.exports = mongoose.model("Product", loginSchema);