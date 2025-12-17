// models/supplyModel.js
import mongoose from 'mongoose';

// Define the Supply schema
const supplySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Supply name is required"],
      trim: true,
    },
    category: {
      type: String,
      required: [true, "Category is required"],
      trim: true,
    },
    quantity: {
      type: Number,
      required: [true, "Quantity is required"],
      min: [0, "Quantity cannot be negative"],
    },
    unit: {
      type: String,
      required: [true, "Unit is required"],
      trim: true,
    },
    condition: {
      type: String,
      default: "good",
      trim: true,
    },
  },
  {
    timestamps: true, // adds createdAt and updatedAt
  }
);

// Create the Supply model
const Supply = mongoose.model('Supply', supplySchema);

export default Supply;
  