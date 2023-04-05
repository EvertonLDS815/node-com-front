const express = require("express");
const router = express.Router();

const { getall, created } = require("../controllers/page");


router.get("/", getall);
router.post("/", created);

module.exports = router;