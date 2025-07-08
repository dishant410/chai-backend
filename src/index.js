//require('dotenv').config({path:'./env'});
import express from  'express';
import connectDB from './db/db.js';
import dotenv from 'dotenv';


dotenv.config({});

const app = express();

connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000,()=>{
        console.log(`server is running on port:${process.env.PORT}`);
    });

}).catch((err)=>{
   console.log("MongoDB connection failed",err);
})
