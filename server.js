const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/auth', require('./routes/auth'));
app.use('/api/orders', require('./routes/orders'));

const connectToDatabase = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, { serverSelectionTimeoutMS: 5000 });
        console.log("✅ SUCCESS: Connected to MongoDB Atlas!");
    } catch (err) {
        console.error("❌ MONGODB CONNECTION ERROR:", err.message);
        process.exit(1);
    }
};

const PORT = process.env.PORT || 5000;
connectToDatabase().then(() => {
    app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
});
const orderRoutes = require('./routes/orders');



app.use('/api/orders', orderRoutes);
// Ensure this part is actually executing

// Add this route to your server.js
app.get('/api/orders', async (req, res) => {
    try {
        const orders = await Order.find(); // Fetches all orders from MongoDB
        res.json(orders);
    } catch (error) {
        res.status(500).json({ error: "Could not fetch orders" });
    }
});

const Product = require('./models/product'); // Make sure you have your product model imported

app.post('/api/products/add', async (req, res) => {
    try {
        // This takes the data from your form and writes it to MongoDB
        const newProduct = new Product(req.body);
        await newProduct.save();
        res.status(201).json({ message: "Product saved to MongoDB!" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Failed to save product" });
    }
});

app.post('/api/orders/add', async (req, res) => {
    try {
        const orderData = {
            ...req.body,
            totalAmount: Number(req.body.totalAmount), // Force conversion
            items: req.body.items.map(item => ({
                ...item,
                price: Number(item.price),
                quantity: Number(item.quantity)
            }))
        };
        const newOrder = new Order(orderData);
        await newOrder.save();
        res.status(201).json({ message: "Success" });
    } catch (err) {
        console.error("Mongoose Validation Error:", err.errors); // Check this in terminal!
        res.status(400).json({ error: err.message });
    }
});
