import express from 'express';
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
router.post('/', (req, res)=>{
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