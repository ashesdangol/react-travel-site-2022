import express from 'express';
import { createWorkout, getWorkouts, getWorkout } from '../controllers/workoutController';

const router = express.Router();

// GET ALL workouts
router.get('/', getWorkouts)

// Get a single workout

router.get('/:id', getWorkout)

// POST new workout
router.post('/', createWorkout)

// // DELETE new workout
// router.delete('/:id', getWorkouts)

// // UPDATE a workout
// router.patch('/:id', (req, res)=>{
//     res.json({msg: "update new  workouts"});
// })

export default router;