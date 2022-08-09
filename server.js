require('dotenv').config();
import express from "express";
import workoutRoutes from './routes/workouts';
import mongoose from 'mongoose';
import cors from 'cors';
import path from 'path';
const port = process.env.PORT || 8000;



// express app
const app = express();

// CORS
const whitelist = ['http://localhost:3000','http://localhost:8000', 'https://workbud.herokuapp.com/'];
const corsOptions = {
    origin: function (origin, callback){
        console.log("**Origin of request "+ origin)
        if(whitelist.indexOf(origin)!==-1 || !origin){
            console.log("Orgin acceptable")
            callback(null, true)
        }else{
            console.log("Origin Rejected")
            callback(new Error("Not allowed by CORS"))
        }
    }
};

app.use(cors(corsOptions));

// middleware
app.use(express.json());
app.use((req, res, next)=>{
    console.log(req.path, req.method);
    next();
})

// routes 

//  /api/workouts/ => fire request '/' from workoutRequest.js
app.use('/api/workouts',workoutRoutes);

// THIS IS NECESSARY TO SERVE REACT IN THE BROWSER ON HEROKU
if (process.env.NODE_ENV === 'production') {
    // Serve any static files
    app.use(express.static(path.join(__dirname, 'front-end/build')));
    // Handle React routing, return all requests to React app
    app.get('*', function(req, res) {
        res.sendFile(path.join(__dirname, 'front-end/build', 'index.html'));
    });
}

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

