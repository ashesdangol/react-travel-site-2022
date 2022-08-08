import express from 'express';
import Workout from '../models/workoutModel';

const router = express.Router();

// GET ALL workouts
router.get('/', (req, res)=>{
    res.json({msg: "get all workouts"});
})

// Get a single workout

router.get('/:id', (req, res)=>{
    res.json({msg: "get single workout"})
})

// POST new workout
router.post('/', async (req, res)=>{
    const {title, reps, load} = req.body
    try {
        const workout = await Workout.create({title, reps, load});
        res.status(200).json(workout);
    }catch(error){
        res.status(400).json({error: error.message})
    }
    res.json({msg: "post new  workouts"});
})

// DELETE new workout
router.delete('/:id', (req, res)=>{
    res.json({msg: "delete a workouts"});
})

// UPDATE a workout
router.patch('/:id', (req, res)=>{
    res.json({msg: "update new  workouts"});
})

export default router;