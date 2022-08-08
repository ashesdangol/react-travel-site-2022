import express from 'express';
import { createWorkout, getWorkouts, getWorkout, deleteWorkout, updateWorkout } from '../controllers/workoutController';

const router = express.Router();

// GET ALL workouts
router.get('/', getWorkouts)

// Get a single workout

router.get('/:id', getWorkout)

// POST new workout
router.post('/', createWorkout)

// DELETE new workout
router.delete('/:id', deleteWorkout)

// UPDATE a workout
router.patch('/:id', updateWorkout)

export default router;