import Schedule from "../models/schedule.model.js";
import Route from "../models/route.model.js"

export const createSchedule = async (req, res) => {
  try {
    const schedule = await Schedule.create(req.body);
    res.status(201).json({ schedule });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getSchedules = async (req, res) => {
  try {
    const schedules = await Schedule.find()
    .populate("bus_id")
    .populate("route_id");
    res.status(200).json(schedules);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getScheduleById = async (req, res) => {
  try {
    const schedule = await Schedule.findById(req.params.id)
      .populate("bus_id")
      .populate("route_id");

    if (!schedule) {
      return res.status(404).json({ message: "Schedule not found" });
    }

    res.status(200).json({
      start_point: schedule.route_id.start_point,
      end_point: schedule.route_id.end_point,
      date_time: schedule.depature_time,
      bus_type: schedule.route_id.type,
      available_seats: schedule.available_seats,
      duration: schedule.route_id.duration,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


export const searchSchedules = async (req, res) => {
  try {
    const { from, to, date } = req.query;

    if (!from || !to || !date) {
      return res.status(400).json({ message: "FROM, TO, and DATE are required!" });
    }

    const routes = await Route.find({
      start_point: { $regex: new RegExp(from, "i") },
      end_point: { $regex: new RegExp(to, "i") },
    });

    if (routes.length === 0) {
      return res.status(404).json({ message: "No routes found!" });
    }

    const routeIds = routes.map((route) => route._id);

    const schedules = await Schedule.find({
      route_id: { $in: routeIds },
      depature_time: {
        $gte: new Date(date + "T00:00:00Z"),
        $lt: new Date(date + "T23:59:59Z"),
      },
    })
      .populate("bus_id")
      .populate("route_id");

    
    const results = schedules.map((schedule) => ({
      start_point: schedule.route_id.start_point,
      end_point: schedule.route_id.end_point,
      date_time: schedule.depature_time,
      bus_type: schedule.route_id.type,
      bus_schedule_id: schedule._id,
      available_seats: schedule.available_seats,
      duration: schedule.route_id.duration,
    }));

    res.status(200).json(results);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

export const updateSchedule = async (req, res) => {
  try {
    const schedule = await Schedule.findByIdAndUpdate(req.params.id, req.body);
    if (!schedule) {
      res.status(404).json({ message: "Schedule not found" });
    }
    res.status(200).json({ schedule });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteSchedule = async (req, res) => {
  try {
    const schedule = await Schedule.findByIdAndDelete(req.params.id);
    if (!schedule) {
      res.status(404).json({ message: "Schedule not found" });
    }
    res.status(200).json({ schedule });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
