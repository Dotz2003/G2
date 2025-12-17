// controllers/supplyController.js
import Supply from '../models/supplies.js';
import { successResponse, errorResponse } from '../helpers/responseHelper.js';

// GET ALL SUPPLIES
export const getAllSupplies = async (req, res) => {
  try {
    const supplies = await Supply.find();
    successResponse(res, 200, 'Supplies retrieved successfully', supplies);
  } catch (error) {
    errorResponse(res, 500, 'Failed to fetch supplies', error);
  }
};

// CREATE SUPPLY
export const createSupply = async (req, res) => {
  try {
    const { name, quantity, unit } = req.body;

    // Validation
    if (!name || quantity === undefined || !unit) {
      errorResponse(res, 400, 'All supply fields (name, quantity, unit) are required');
      return;
    }

    const newSupply = await Supply.create({
      name,
      quantity,
      unit,
    });

    successResponse(res, 201, 'Supply created successfully', newSupply);
  } catch (error) {
    errorResponse(res, 500, 'Failed to create supply', error);
  }
};

// UPDATE SUPPLY
export const updateSupply = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, quantity, unit } = req.body;

    if (!id) {
      errorResponse(res, 400, 'Supply ID is required');
      return;
    }

    const updated = await Supply.findByIdAndUpdate(
      id,
      { name, quantity, unit },
      { new: true, runValidators: true }
    );

    if (!updated) {
      return errorResponse(res, 404, 'Supply not found');
    }

    successResponse(res, 200, 'Supply updated successfully', updated);
  } catch (error) {
    errorResponse(res, 500, 'Failed to update supply', error);
  }
};

// DELETE SUPPLY
export const deleteSupply = async (req, res) => {
  try {
    const { id } = req.query; 

    if (!id) {
      errorResponse(res, 400, 'Supply ID is required');
      return;
    }

    const deleted = await Supply.findByIdAndDelete(id);

    if (!deleted) {
      return errorResponse(res, 404, 'Supply not found');
    }

    successResponse(res, 200, 'Supply deleted successfully');
  } catch (error) {
    errorResponse(res, 500, 'Failed to delete supply', error);
  }
};
