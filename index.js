const express = require("express");
const app = express();
const port = process.env.PORT || 5656;
const path = require("path");
const router = require("./src/routes/route");
require("dotenv").config();
const connectToDB = require("./src/database/database");
const cors = require("cors");

app.use(express.json());
app.use(express.static(path.join(__dirname, "/src/public")));
app.use(express.urlencoded({extended: true}));
app.use(cors());

connectToDB();

app.use(router);

app.listen(port, () =>
  console.log(`🚀 My Server is on port http://localhost:${port}`)
);
