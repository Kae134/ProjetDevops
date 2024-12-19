import express from 'express';
import {
  getAllTasks,
  getTasks,
  addTask,
  updateTask,
  deleteTask
} from '../controllers/taskListController.js';

const router = express.Router();

router.get('/', getAllTasks);
router.get('/:id', getTasks);
router.post('/', addTask);
router.put('/:id', updateTask);
router.delete('/:id', deleteTask);

export default router;
