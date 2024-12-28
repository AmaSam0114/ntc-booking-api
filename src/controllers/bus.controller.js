import Bus from "../models/bus.model.js";

export const createBus = async (req, res) => {
  try {
    const bus = await Bus.create(req.body);
    res.status(201).json({ bus });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getBuses = async (req, res) => {
  try {
    const buses = await Bus.find();
    res.status(200).json(buses);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getBusById = async (req, res) => {
  try {
    const bus = await Bus.findById(req.params.id);
    if (!bus) {
      res.status(404).json({ message: "Bus not found" });
    }
    res.status(200).json({ bus });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const updateBus = async (req, res) => {
  try {
    const bus = await Bus.findByIdAndUpdate(req.params.id, req.body);
    if (!bus) {
      res.status(404).json({ message: "Bus not found" });
    }
    res.status(200).json({ bus });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteBus = async (req, res) => {
  try {
    const bus = await Bus.findByIdAndDelete(req.params.id);
    if (!bus) {
      res.status(404).json({ message: "Bus not found" });
    }
    res.status(200).json({ bus });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};