require('dotenv').config();
import express from "express";

// express app
const app = express();

// middleware

app.use((req, res, next)=>{
    console.log(req.path, req.method)
    next()
})

// routes 

app.get('/', (req, res)=>{
    res.json({message:"welcome to the app"});
})


// listen for requests
app.listen(process.env.PORT, () =>{
    console.log('listening on port 8000')
})