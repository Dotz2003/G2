// routes/supplyRoutes.js
import express from 'express';
import {
  getAllSupplies,
  createSupply,
  updateSupply,
  deleteSupply,
} from '../controllers/classroomsuppliesControllers.js';

const router = express.Router();

// Supply routes
router.get('/', getAllSupplies);
router.post('/', createSupply);
router.put('/:id', updateSupply);
router.delete('/', deleteSupply);

export default router;
