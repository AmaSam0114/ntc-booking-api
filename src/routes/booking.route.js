import express from 'express';
import { createBooking, getBookings, getUserBookings, cancelBooking, } from '../controllers/booking.controller.js';

const router = express.Router();

router.post('/', createBooking);
router.get('/', getBookings);
router.get('/:id', getUserBookings);
router.delete('/:id', cancelBooking);

export default router;