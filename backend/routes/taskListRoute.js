import express from 'express';
import {
  getAllTasks,
  addTask
} from '../controllers/taskListController.js';

const router = express.Router();

router.get('/', getAllTasks);
router.post('/', addTask);

export default router;
