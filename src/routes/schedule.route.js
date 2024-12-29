import express from 'express';
import { createSchedule, getSchedules, searchSchedules, updateSchedule, deleteSchedule } from '../controllers/schedule.controller.js';

const router = express.Router();

router.get('/', getSchedules);
router.get("/search", searchSchedules);

router.post('/', createSchedule);
router.put('/:id', updateSchedule);
router.delete('/:id', deleteSchedule);

export default router;