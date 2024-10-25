const express = require("express");
const UserModel = require("../models/User"); // Adjust the path if necessary
const authRouter = express.Router();

authRouter.post("/api/signup", async (req, res) => {
  const { username, email, password } = req.body;  // Changed "name" to "username"

  // Check if all fields are provided
  if (!username || !email || !password) {
    return res.status(400).json({ message: "All fields are required." });
  }

  try {
    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists." });
    }

    // Create a new user instance
    const newUser = new UserModel({ username, email, password });
    await newUser.save(); // Save the user to the database

    const token = newUser.getJWT(); // Generate a JWT token

    res.status(201).json({
      user: {
        _id: newUser._id,
        username: newUser.username,
        email: newUser.email,
      },
      token,
    });
  } catch (error) {
    console.error("Error during sign-up:", error);
    res.status(500).json({ message: "Server error. Please try again later." });
  }
});

module.exports = authRouter;
