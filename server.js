import express from "express";

// express app
const app = express();

// listen for requests

app.listen(3000, () =>{
    console.log('listening on port 3000')
})