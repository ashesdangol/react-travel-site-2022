require('dotenv').config();
import express from "express";

// express app
const app = express();

// route handler

app.get('/', (req, res)=>{
    res.json({message:"welcome to the app"});
})


// listen for requests
app.listen(process.env.PORT, () =>{
    console.log('listening on port 8000')
})