const jwt = require("jsonwebtoken");
const env = require("dotenv");
const genrateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });
};

module.exports = genrateToken;
