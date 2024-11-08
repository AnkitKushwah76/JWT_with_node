const express = require("express");
const auth = require("../middelwares/auth");

const {
  registerUser,
  authUser,
  getAllUsers,
} = require("../controllers/userController");

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", authUser);
router.get("/", auth, getAllUsers);

module.exports = router;
