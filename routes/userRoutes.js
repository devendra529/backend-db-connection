//  API routes

const express = require("express");    // Express is a framework used to build backend APIs and web application in node.js
const router = express.Router();       // A small part of your app that handles specific routes and logic, used to organize your code better

// Import controller functions
const {
  createUser,
  getUsers,
} = require("../controllers/userController");

// Route for creating user
router.post("/", createUser);

// Route for getting all users
router.get("/", getUsers);

module.exports = router;