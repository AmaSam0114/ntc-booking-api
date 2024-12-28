import express from 'express';
import { initiatePayment, verifyPayment } from '../controllers/payment.controller.js';

const router = express.Router();

router.post('/inititate', initiatePayment);

router.post('/verify', verifyPayment);

export default router;