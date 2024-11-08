const express = require("express");
const env = require("dotenv");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const bookRoutes = require("./routes/bookRoutes");
env.config();
connectDB();

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 5000;

// routes
app.use("/api/users", userRoutes);
app.use("/api/books", bookRoutes);
app.listen(PORT, () => {
  console.log(`Server is runnig this port ${PORT}`);
});
