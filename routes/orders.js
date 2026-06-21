const express = require('express');
const router = express.Router();
const Order = require('../models/order');

// 1. POST: Save a new order
router.post('/add', async (req, res) => {
    try {
        const newOrder = new Order(req.body);
        await newOrder.save();
        res.status(201).json({ message: "Order saved successfully!" });
    } catch (error) {
        res.status(500).json({ error: "Failed to save order" });
    }
});

// 2. GET: Fetch all orders for a specific user (for 'My Orders' page)
router.get('/user/:userId', async (req, res) => {
    try {
        const orders = await Order.find({ userId: req.params.userId }).sort({ createdAt: -1 });
        res.json(orders);
    } catch (error) {
        res.status(500).json({ error: "Could not fetch orders" });
    }
});

// 3. GET: Fetch a single order by ID (for 'Track Order' page)
router.get('/:id', async (req, res) => {
    try {
        const order = await Order.findById(req.params.id);
        if (!order) return res.status(404).json({ message: "Order not found" });
        res.json(order);
    } catch (error) {
        res.status(500).json({ error: "Server error" });
    }
});

module.exports = router;