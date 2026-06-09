const express = require('express');
const router = express.Router();
const Order = require('../models/Order');

// Endpoint to place an order: POST http://localhost:5000/api/orders/create
router.post('/create', async (req, res) => {
    try {
        const { userId, items, totalAmount, shippingAddress } = req.body;

        if (!userId || !items || items.length === 0 || !totalAmount || !shippingAddress) {
            return res.status(400).json({ message: "Missing required order fields" });
        }

        const newOrder = new Order({
            userId,
            items,
            totalAmount,
            shippingAddress
        });

        await newOrder.save();
        res.status(201).json({ message: "Order saved to MongoDB!", orderId: newOrder._id });

    } catch (error) {
        res.status(500).json({ message: "Server error creating order", error: error.message });
    }
});

module.exports = router;