//  Main backend entry point

const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config();
connectDB();

const app = express();

const cors = require("cors");

// VERY IMPORTANT (this was missing)
app.use(express.json());

app.use(cors()); // allow frontend to connect to backend

app.get("/", (req, res) => {
  res.send("API Running");
});

// also make sure routes are connected
const userRoutes = require("./routes/userRoutes");
app.use("/api/users", userRoutes);

app.listen(5000, () => console.log("Server running on port 5000"));