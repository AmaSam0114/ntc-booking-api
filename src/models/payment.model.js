import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema({
    paymentMethod: {
        type: String,
        required: true,
    },
    paymentStatus: {
        type: String,
        required: true,
    },
    paymentAmount: {
        type: Number,
        required: true,
    },
    paymentDate: {
        type: Date,
        required: true,
    },
    paymentRef: {
        type: String,
        required: true,
    },
    bookingId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Booking',
        required: true,
    },
});

const Payment = mongoose.model('Payment', paymentSchema);
export default Payment;