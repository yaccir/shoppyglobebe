import express from 'express';
import { shoppyRoutes } from './Routes/shoppyRoutes.js';
import mongoose from 'mongoose';
const app=express();

const port=8086;
// Middleware for json parsing
app.use(express.json());


app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})


// Connect to MongoDB from remote server
mongoose.connect("mongodb+srv://muhammadyacir786_db_user:YM4qs2L5dzqkkNGH@cluster0.nqmqwmb.mongodb.net/")

.then(()=>{
    console.log("Connected to MongoDB");
}).catch((err)=>{
    console.log("Error connecting to MongoDB",err);
});


app.get('/',(req,res)=>{
    res.send('WELCOME TO SHOPPYGLOBE BACKEND'); ;
})


// Register Routes
shoppyRoutes(app);