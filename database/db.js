const mongoose = require("mongoose");
mongoose.set("strictQuery", true);

const connectToDB = () => {
  mongoose
    .connect(process.env.DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("🚀 MongoDB Atlas Connected!"))
    .catch((err) => console.log(err));
};

module.exports = connectToDB;
