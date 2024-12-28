import mongoose from "mongoose";

const ScheduleSchema = new mongoose.Schema({
    bus_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Bus",
        required: true,
    },
    route_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Route",
        required: true,
    },
    depature_time: {
        type: Date,
        required: true,
    },
    arrival_time: {
        type: Date,
        required: true,
    },
    availale_seats: {
        type: Number,
        required: true,
    },
});

const Schedule = mongoose.model("Schedule", ScheduleSchema);
export default Schedule;
