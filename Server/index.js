import express from "express";
import mongoConnection from "./config/db.js";

const app = express();

const PORT = 8000;
mongoConnection();
app.listen(PORT, ()=>{
    console.log('api is running on: http://localhost:8000')
});
