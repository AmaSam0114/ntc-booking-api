import express from 'express';
import { createBus, getBuses, getBusById, updateBus, deleteBus, } from '../controllers/bus.controller.js';

const router = express.Router();

router.get('/', getBuses);
router.get('/:id', getBusById);

router.post('/', createBus);
router.put('/:id', updateBus);
router.delete('/:id', deleteBus);

export default router;