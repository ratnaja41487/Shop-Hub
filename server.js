const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/auth', require('./routes/auth'));
const Order = require('./models/order');
const orderRoutes = require('./routes/orders');
app.use('/api/orders', orderRoutes);

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

app.get('/api/orders', async (req, res) => {
    try {
        const orders = await Order.find();
        res.json(orders);
    } catch (error) {
        res.status(500).json({ error: "Could not fetch orders" });
    }
});

const Product = require('./models/product');

app.post('/api/products/add', async (req, res) => {
    try {
        const newProduct = new Product(req.body);
        await newProduct.save();
        res.status(201).json({ message: "Product saved to MongoDB!" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Failed to save product" });
    }
});