import mongoose from "mongoose";
import User from "../models/user.model.js";
import Bus from "../models/bus.model.js";
import Route from "../models/route.model.js";
import Schedule from "../models/schedule.model.js";
import Booking from "../models/booking.model.js";

// Sample Data
const sampleData = {
  users: [
    {
      _id: "65c6f4baf25b3a4c30e99701",
      name: "John Doe",
      email: "john.doe@example.com",
      password: "admin123",
      role: "admin",
    },
    {
      _id: "65c6f4baf25b3a4c30e99702",
      name: "Jane Smith",
      email: "jane.smith@example.com",
      password: "passenger123",
      role: "passenger",
    },
    {
      _id: "65c6f4baf25b3a4c30e99703",
      name: "Michael Johnson",
      email: "michael.johnson@example.com",
      password: "operator123",
      role: "operator",
    },
  ],
  buses: [
    {
      bus_number: "EXP-001",
      router_id: "65c6f4baf25b3a4c30e99801",
      capacity: 40,
      operator_id: "65c6f4baf25b3a4c30e99703",
    },
    {
      bus_number: "EXP-002",
      router_id: "65c6f4baf25b3a4c30e99802",
      capacity: 35,
      operator_id: "65c6f4baf25b3a4c30e99703",
    },
  ],
  routes: [
    {
      _id: "65c6f4baf25b3a4c30e99801",
      start_point: "Colombo",
      end_point: "Kandy",
      distance: 120,
      duration: 180,
      type: "expressway",
    },
    {
      _id: "65c6f4baf25b3a4c30e99802",
      start_point: "Galle",
      end_point: "Matara",
      distance: 50,
      duration: 60,
      type: "normalway",
    },
  ],
  schedules: [
    {
      bus_id: "65c6f4baf25b3a4c30e99801",
      route_id: "65c6f4baf25b3a4c30e99801",
      depature_time: "2024-01-01T08:00:00Z",
      arrival_time: "2024-01-01T12:00:00Z",
      availale_seats: 40,
    },
    {
      bus_id: "65c6f4baf25b3a4c30e99802",
      route_id: "65c6f4baf25b3a4c30e99802",
      depature_time: "2024-01-02T09:30:00Z",
      arrival_time: "2024-01-02T11:45:00Z",
      availale_seats: 35,
    },
  ],
  bookings: [
    {
      user_id: "65c6f4baf25b3a4c30e99702",
      schedule_id: "65c6f4baf25b3a4c30e99801",
      seat_number: 1,
      payment_status: "completed",
    },
    {
      user_id: "65c6f4baf25b3a4c30e99703",
      schedule_id: "65c6f4baf25b3a4c30e99802",
      seat_number: 2,
      payment_status: "pending",
    },
  ],
};

// Seeder Function
const seedDatabase = async () => {
  try {
    // Clear existing data
    await User.deleteMany();
    await Bus.deleteMany();
    await Route.deleteMany();
    await Schedule.deleteMany();
    await Booking.deleteMany();

    // Insert new data
    await User.insertMany(sampleData.users);
    await Route.insertMany(sampleData.routes);
    await Bus.insertMany(sampleData.buses);
    await Schedule.insertMany(sampleData.schedules);
    await Booking.insertMany(sampleData.bookings);

    console.log("Sample data inserted successfully!");
  } catch (err) {
    console.error("Failed to seed database:", err.message);
  }
};

export default seedDatabase;
