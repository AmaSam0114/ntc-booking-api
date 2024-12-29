import express from 'express';
import { createSchedule, getSchedules, getScheduleById, searchSchedules, updateSchedule, deleteSchedule } from '../controllers/schedule.controller.js';

const router = express.Router();

router.get('/', getSchedules);
router.get("/search", searchSchedules);
router.get("/:id", getScheduleById);

router.post('/', createSchedule);
router.put('/:id', updateSchedule);
router.delete('/:id', deleteSchedule);

export default router;