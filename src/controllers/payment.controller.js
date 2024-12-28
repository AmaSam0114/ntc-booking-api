import Payment from '../models/payment.model.js';

export const initiatePayment = async (req, res) => {
    try {
        const payment = await Payment.create(req.body);
        res.status(201).json({ payment });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export const verifyPayment = async (req, res) => {
    try {
        const payment = await Payment.findById(req.params.id);
        if (!payment) {
            res.status(404).json({ message: "Payment not found" });
        }
        res.status(200).json({ payment });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}