const express = require('express');
const router = express.Router();
const User = require('../models/User'); // Adjust if your User model is in a different folder
const jwt = require('jsonwebtoken');

// ==========================================
// 1. SIGNUP ROUTE (Keep your original signup code here)
// ==========================================
router.post('/signup', async (req, res) => {
    try {
        const { username, email, password } = req.body;

        let userExists = await User.findOne({ email });
        if (userExists) {
            return res.status(400).json({ message: "User already exists with this email" });
        }

        const newUser = new User({ username, email, password });
        await newUser.save();

        const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.status(201).json({
            message: "User registered successfully!",
            token,
            user: { id: newUser._id, username: newUser.username, email: newUser.email }
        });
    } catch (error) {
        console.error("CRITICAL ERROR IN SIGNUP ROUTE:", error.message);
        res.status(500).json({ message: "Internal Server Error during signup", error: error.message });
    }
});

// ==========================================
// 2. LOGIN ROUTE 
// ==========================================
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check if the user exists
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "Invalid Email or Password" });
        }

        // Verify the password 
        if (user.password !== password) {
            return res.status(400).json({ message: "Invalid Email or Password" });
        }

        // Generate a JWT Token
        const token = jwt.sign(
            { id: user._id }, 
            process.env.JWT_SECRET, 
            { expiresIn: '1h' }
        );

        // Send Success Response
        res.status(200).json({
            message: "Login successful!",
            token,
            user: {
                id: user._id,
                username: user.username,
                email: user.email
            }
        });

    } catch (error) {
        console.error("CRITICAL ERROR IN LOGIN ROUTE:", error.message);
        res.status(500).json({ 
            message: "Internal Server Error during login", 
            error: error.message 
        });
    }
});

// ==========================================
// 3. EXPORT THE ROUTER
// ==========================================
module.exports = router;