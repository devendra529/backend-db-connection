//  Logic for routes

const User = require("../models/User");

// @desc    Create new user
// @route   POST /api/users
const createUser = async (req, res) => {
  try {
    const { name, email } = req.body;

    // Create user in DB
    const user = await User.create({
      name,
      email,
    });

    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get all users
// @route   GET /api/users
const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createUser,
  getUsers,
};