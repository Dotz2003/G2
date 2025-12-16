const mongoose = require('mongoose');
// models/supplyModel.js
import mongoose from 'mongoose';

const supplySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  quantity: {
    type: Number,
    required: true,
    min: 0
  },
  unit: {
    type: String,
    required: true
  },
  condition: {
    type: String,
    default: "good"
  }
}, { timestamps: true });

module.exports = mongoose.model('Supply', supplySchema);
const Supply = mongoose.model('Supply', supplySchema);

export default Supply;