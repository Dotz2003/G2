// controllers/supplyController.js
import Supply from '../models/supplyModel.js';
import { successResponse, errorResponse } from '../helpers/responseHelper.js';

// KUAHA AN NGATANAN NGA SUPPLIES
export const getAllSupplies = async (req, res) => {
  try {
    const supplies = await Supply.find();
    successResponse(res, 200, 'Supplies retrieved successfully', supplies);
  } catch (error) {
    errorResponse(res, 500, 'Failed to fetch supplies', error);
  }
};

// PAG-HIMO HAN BAG-O NGA SUPPLY
export const createSupply = async (req, res) => {
  try {
    const { name, category, quantity, unit, condition } = req.body;

    // VALIDATION: Siguroha nga kompleto an data
    if (!name || !category || quantity === undefined || !unit) {
      errorResponse(res, 400, 'All fields (name, category, quantity, unit) are required');
      return;
    }

    const newSupply = await Supply.create({
      name,
      category,
      quantity,
      unit,
      condition,
    });

    successResponse(res, 201, 'Supply created successfully', newSupply);
  } catch (error) {
    errorResponse(res, 500, 'Failed to create supply', error);
  }
};

// PAG-UPDATE HAN SUPPLY
export const updateSupply = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, category, quantity, unit, condition } = req.body;

    // VALIDATION: Kinahanglan an ID
    if (!id) {
      errorResponse(res, 400, 'Supply ID is required');
      return;
    }

    const updated = await Supply.findByIdAndUpdate(
      id,
      { name, category, quantity, unit, condition },
      { new: true, runValidators: true }
    );

    // KON WARAY MA-UPDATE
    if (!updated) {
      return errorResponse(res, 404, 'Supply not found');
    }

    successResponse(res, 200, 'Supply updated successfully', updated);
  } catch (error) {
    errorResponse(res, 500, 'Failed to update supply', error);
  }
};

// PAG-DELETE HAN SUPPLY
export const deleteSupply = async (req, res) => {
  try {
    const { id } = req.query; // gamit query parameter para han ID

    // VALIDATION: Kinahanglan an ID
    if (!id) {
      errorResponse(res, 400, 'Supply ID is required');
      return;
    }

    const deleted = await Supply.findByIdAndDelete(id);

    // KON WARAY NASAPWAN
    if (!deleted) {
      return errorResponse(res, 404, 'Supply not found');
    }

    successResponse(res, 200, 'Supply deleted successfully');
  } catch (error) {
    errorResponse(res, 500, 'Failed to delete supply', error);
  }
};
