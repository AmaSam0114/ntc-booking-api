import Booking from "../models/booking.model.js";
import Bus from "../models/bus.model.js";
import Route from "../models/route.model.js";
import Schedule from "../models/schedule.model.js";

export const createBooking = async (req, res) => {
  try {
    const { schedule_id, seat_number } = req.body;

    const user_id = req.user.id;

    const schedule = await Schedule.findById(schedule_id);
    if (!schedule) {
      return res.status(404).json({ message: "Schedule not found" });
    }

    if (seat_number > schedule.available_seats || seat_number < 1) {
      return res.status(400).json({ message: "Invalid seat number!" });
    }

    const booking = await Booking.create({
      user_id,
      schedule_id,
      seat_number,
      payment_status: "pending",
    });

    schedule.available_seats -= 1;
    await schedule.save();

    res.status(201).json({ booking });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getBookings = async (req, res) => {
  try {
    const bookings = await Booking.find();
    res.status(200).json({ bookings });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getUserBookings = async (req, res) => {
  try {
    const userId = req.params.id;

    const bookings = await Booking.find({ user_id: userId })
      .populate({
        path: "schedule_id",
        populate: [
          { path: "bus_id", model: Bus },
          { path: "route_id", model: Route },
        ],
      })
      .exec();

    if (!bookings || bookings.length === 0) {
      return res
        .status(404)
        .json({ message: "No bookings found for this user." });
    }

    res.status(200).json(bookings);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const cancelBooking = async (req, res) => {
  try {
    const bookingId = req.params.id;
    const booking = await Booking.findByIdAndDelete(bookingId);
    res.status(200).json({ booking });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};