import express from 'express';
import connectDB from './src/config/db.js';
import cors from 'cors';

import dotenv from 'dotenv';
dotenv.config();

// routes
import authRoutes from './src/routes/auth.route.js';
import bookingRoutes from './src/routes/booking.route.js';
import busRoutes from './src/routes/bus.route.js';
import paymentRoutes from './src/routes/payment.route.js';
import routeRoutes from './src/routes/route.route.js';
import scheduleRoutes from './src/routes/schedule.route.js';

connectDB();

const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
    cors({
      origin: "*", // Allow all origins or specify allowed domains
      methods: ["GET", "POST", "PUT", "DELETE"],
      allowedHeaders: ["Content-Type", "Authorization"],
    })
  );

// ping
app.get('/ping', (req, res) => {
    res.status(200).json({
      message: 'pong',
    });
});

// errors
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Internal Server Error', error: err.message });
})

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/buses', busRoutes);
app.use('/api/routes', routeRoutes);
app.use('/api/schedules', scheduleRoutes);
app.use('/api/bookings', bookingRoutes);
app.use('/api/payments', paymentRoutes);

// server
const PORT = process.env.APP_PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});