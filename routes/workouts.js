const express = require('express');
const { createWorkout, getWorkouts, getWorkout, deleteWorkout, updateWorkout } = require('../controllers/workoutController');

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

module.exports = router;