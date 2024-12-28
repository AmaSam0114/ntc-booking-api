import mongoose from 'mongoose';
import seedDatabase from './mock-data';

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB Connected...');

    const usersCount = await mongoose.connection.db
      .collection("users")
      .countDocuments();

    if (usersCount === 0) {
      console.log("Seeding sample data...");
      await seedDatabase(); // Populate data only if the DB is empty
    } else {
      console.log("Sample data already exists. Skipping seed.");
    }
  } catch (error) {
    console.error('Database Connection Failed:', error.message);
    process.exit(1);
  }
};

export default connectDB;