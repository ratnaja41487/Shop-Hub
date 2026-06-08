const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const authRoutes = require('./routes/auth'); // Adjust path to your auth.js file if necessary

const app = express();

// Middleware to parse incoming JSON request bodies
app.use(express.json());

// Mount Authentication Routes
app.use('/api/auth', authRoutes);

// Establish database connection with robust error catching options
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("Successfully connected to MongoDB Atlas!"))
    .catch((err) => {
        console.error("MongoDB initial connection error:", err.message);
    });

// Fallback error-catching middleware
app.use((err, req, res, next) => {
    console.error("Unhandled Exception:", err.stack);
    res.status(500).send({ message: "Something went wrong on the server side." });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});