import Route from "../models/route.model.js";

export const createRoute = async (req, res) => {
  try {
    const route = await Route.create(req.body);
    res.status(201).json({ route });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getRoutes = async (req, res) => {
  try {
    const routes = await Route.find();
    res.status(200).json({ routes });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getRouteById = async (req, res) => {
  try {
    const route = await Route.findById(req.params.id);
    if (!route) {
      res.status(404).json({ message: "Route not found" });
    }
    res.status(200).json({ route });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const updateRoute = async (req, res) => {
  try {
    const route = await Route.findByIdAndUpdate(req.params.id, req.body);
    if (!route) {
      res.status(404).json({ message: "Route not found" });
    }
    res.status(200).json({ route });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteRoute = async (req, res) => {
  try {
    const route = await Route.findByIdAndDelete(req.params.id);
    if (!route) {
      res.status(404).json({ message: "Route not found" });
    }
    res.status(200).json({ route });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};