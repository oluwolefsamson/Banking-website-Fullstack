const express = require("express");
const connectDB = require("./db");
require("dotenv").config();
const cors = require("cors");
const userRoutes = require("./routes/userRoutes");

const app = express();

// Configure CORS
app.use(
  cors({
    origin: ["https://banking-website-fullstack.vercel.app"], // Replace with your frontend URL
    methods: ["POST", "OPTION", "GET", "PUT", "DELETE"],
    credentials: true, // Enable cookies in requests
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
