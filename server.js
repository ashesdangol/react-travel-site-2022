require('dotenv').config();
import express from "express";
import workoutRoutes from './routes/workouts';
import mongoose from 'mongoose';

// express app
const app = express();

// middleware
app.use(express.json());
app.use((req, res, next)=>{
    console.log(req.path, req.method);
    next();
})

// routes 

//  /api/workouts/ => fire request '/' from workoutRequest.js
app.use('/api/workouts',workoutRoutes);


// connect to db
mongoose.connect(process.env.MONGO_URL)
.then(()=>{
    // listen for requests
    app.listen(process.env.PORT, () =>{
        console.log('connected to db and listening on port', process.env.PORT);
    })
})
.catch((error)=>{
    console.log(error)
})

