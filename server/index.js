const express = require("express");
const connectDB = require("./db");
require("dotenv").config();
const mongoose = require("mongoose");
const cors = require("cors");
const userRoutes = require("./routes/userRoutes");

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173", // Replace with your frontend URL
  })
);
app.use(express.json());

connectDB();

const PORT = process.env.PORT || 3001;

app.use("/api/users", userRoutes);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`App listening to port ${PORT}`);
});
