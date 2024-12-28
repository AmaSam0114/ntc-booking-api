import express from 'express';
import { createRoute, getRoutes, getRouteById, updateRoute, deleteRoute } from '../controllers/route.controller.js';

const router = express.Router();

router.get('/', getRoutes);
router.get('/:id', getRouteById);

router.post('/', createRoute);
router.put('/:id', updateRoute);
router.delete('/:id', deleteRoute);

export default router;