import mongoose from "mongoose";

const busSchema = new mongoose.Schema({
  bus_number: {
    type: String,
    required: true,
    unique: true,
  },
  router_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Route",
    required: true,
  },
  capacity: {
    type: Number,
    required: true,
  },
  operator_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

const Bus = mongoose.model("Bus", busSchema);
export default Bus;
