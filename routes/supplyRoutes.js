// routes/supplyRoutes.js
import express from 'express';
import {
  getAllSupplies,
  createSupply,
  updateSupply,
  deleteSupply,
} from '../controllers/supplyController.js';

const router = express.Router();

// Supply routes
router.get('/', getAllSupplies);
router.post('/', createSupply);
router.put('/:id', updateSupply);
// Use query parameter or body for delete; here assuming query parameter "id"
router.delete('/', deleteSupply);

export default router;
