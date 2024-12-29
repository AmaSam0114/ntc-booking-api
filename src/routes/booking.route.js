import express from 'express';
import { createBooking, getBookings, getUserBookings, cancelBooking, } from '../controllers/booking.controller.js';
import auth from '../middleware/auth.middleware.js';

const router = express.Router();

router.post('/', auth(["commuter", "admin"]), createBooking);
router.get('/', getBookings);
router.get('/:id', getUserBookings);
router.delete('/:id', cancelBooking);

export default router;