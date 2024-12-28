import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  schedule_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Schedule",
    required: true,
  },
  seat_number: {
    type: Number,
    required: true,
  },
  payment_status: {
    type: String,
    enum: ["pending", "completed"],
    default: "pending",
  },
});

const Booking = mongoose.model("Booking", bookingSchema);
export default Booking;
