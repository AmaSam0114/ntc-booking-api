import express from 'express';
import { createSchedule, getSchedules, updateSchedule, deleteSchedule } from '../controllers/schedule.controller.js';

const router = express.Router();

router.get('/', getSchedules);

router.post('/', createSchedule);
router.put('/:id', updateSchedule);
router.delete('/:id', deleteSchedule);

export default router;