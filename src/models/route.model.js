import mongoose from "mongoose";

const RouteSchema = new mongoose.Schema({
  start_point: {
    type: String,
    required: true,
  },
  end_point: {
    type: String,
    required: true,
  },
  distance: {
    type: Number,
    required: true,
  },
  duration: {
    type: Number,
    required: true,
  },
});

const Route = mongoose.model("Route", RouteSchema);
export default Route;
