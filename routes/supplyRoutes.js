const express = require('express');
import express from 'express';
import * as controller from '../controllers/supplyController.js';

const router = express.Router();
const controller = require('../controllers/supplyController');

router.get('/', controller.getAllSupplies);
router.post('/', controller.createSupply);
router.put('/:id', controller.updateSupply);
router.delete('/', controller.deleteSupply);

module.exports = router;
export default router;