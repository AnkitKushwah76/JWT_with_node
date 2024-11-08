const express = require("express");
const auth = require("../middelwares/auth");

const {
  createBook,
  getBook,
  updateBook,
} = require("../controllers/bookCOntroller");

const router = express.Router();

router.post("/createBook", auth, createBook);

module.exports = router;
