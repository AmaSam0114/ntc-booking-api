import Schedule from "../models/schedule.model.js";

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
    const schedules = await Schedule.find();
    res.status(200).json(schedules);
  } catch (error) {
    res.status(404).json({ message: error.message });
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
