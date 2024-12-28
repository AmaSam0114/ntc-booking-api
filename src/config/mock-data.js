import mongoose from "mongoose";
import bcrypt from "bcrypt";
import User from "../models/user.model.js";
import Bus from "../models/bus.model.js";
import Route from "../models/route.model.js";
import Schedule from "../models/schedule.model.js";
import Booking from "../models/booking.model.js";

// Hash passwords
const hashPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};

// Sample Data
const sampleData = async () => ({
  users: [
    {
      _id: "65c6f4baf25b3a4c30e99701",
      name: "John Doe",
      email: "john.doe@example.com",
      password: await hashPassword("admin123"), // Hashed password
      role: "admin",
    },
    {
      _id: "65c6f4baf25b3a4c30e99702",
      name: "Jane Smith",
      email: "jane.smith@example.com",
      password: await hashPassword("passenger123"), // Hashed password
      role: "commuter",
    },
    {
      _id: "65c6f4baf25b3a4c30e99703",
      name: "Michael Johnson",
      email: "michael.johnson@example.com",
      password: await hashPassword("operator123"), // Hashed password
      role: "operator",
    },
  ],
  buses: [
    {
      bus_number: "EXP-001",
      router_id: "65c6f4baf25b3a4c30e99801", // Matches route ID
      capacity: 40,
      operator_id: "65c6f4baf25b3a4c30e99703", // Matches operator ID
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
      bus_id: "65c6f4baf25b3a4c30e99801", // Matches bus ID
      route_id: "65c6f4baf25b3a4c30e99801", // Matches route ID
      depature_time: "2024-01-01T08:00:00Z",
      arrival_time: "2024-01-01T12:00:00Z",
      available_seats: 40, // Fixed typo
    },
    {
      bus_id: "65c6f4baf25b3a4c30e99802",
      route_id: "65c6f4baf25b3a4c30e99802",
      depature_time: "2024-01-02T09:30:00Z",
      arrival_time: "2024-01-02T11:45:00Z",
      available_seats: 35,
    },
  ],
  bookings: [
    {
      user_id: "65c6f4baf25b3a4c30e99702", // Matches user ID
      schedule_id: "65c6f4baf25b3a4c30e99801", // Matches schedule ID
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
});

// Seeder Function
const seedDatabase = async () => {
  try {
    console.log("Seeding database...");

    // Clear existing data
    await User.deleteMany();
    await Bus.deleteMany();
    await Route.deleteMany();
    await Schedule.deleteMany();
    await Booking.deleteMany();

    // Insert new data
    const data = await sampleData();
    await User.insertMany(data.users);
    await Route.insertMany(data.routes);
    await Bus.insertMany(data.buses);
    await Schedule.insertMany(data.schedules);
    await Booking.insertMany(data.bookings);

    console.log("Sample data inserted successfully!");
  } catch (err) {
    console.error("Failed to seed database:", err.message);
  }
};

export default seedDatabase;
