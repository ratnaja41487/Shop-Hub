const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// SIGNUP
router.post('/signup', async (req, res) => {
    try {
        const { username, email, password } = req.body;

        if (!username || !email || !password) {
            return res.status(400).json({ message: "All fields are required" });
        }

        // FIX: The variable 'hashedPassword' must be defined here
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Now 'hashedPassword' is defined and safe to use
        const newUser = new User({
            username, 
            email,
            password: hashedPassword 
        });

        await newUser.save();
        res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
        console.error("SIGNUP ERROR:", error.message);
        res.status(500).json({ message: "Server error during signup" });
    }
});

// LOGIN
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        
        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(400).json({ message: "Invalid credentials" });
        }
        
        res.status(200).json({ message: "Login successful", user: { username: user.username, email: user.email } });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;