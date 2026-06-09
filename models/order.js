const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  // This must strictly be a 24-character hex MongoDB ObjectId string
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  items: [
    {
      productName: { type: String, required: true },
      quantity: { type: Number, required: true },
      price: { type: Number, required: true }
    }
  ],
  totalAmount: {
    type: Number,
    required: true
  },
  shippingAddress: {
    type: String,
    required: true
  }
}, { timestamps: true });

module.exports = mongoose.model('Order', orderSchema);