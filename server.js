require('dotenv').config();
import express from "express";
import workoutRoutes from './routes/workouts';

// express app
const app = express();

// middleware

app.use((req, res, next)=>{
    console.log(req.path, req.method);
    next();
})

// routes 

//  /api/workouts/ => fire request '/' from workoutRequest.js
app.use('/api/workouts',workoutRoutes);

// listen for requests
app.listen(process.env.PORT, () =>{
    console.log('listening on port 8000')
})