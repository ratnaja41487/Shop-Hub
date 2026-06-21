const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    title: { type: String, required: true },
    category: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String }, // Stores the Base64 image string
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Product', productSchema);