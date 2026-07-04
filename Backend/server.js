import express from 'express';
import  dbconnect  from "./db/db.js";
import userroutes from "./routes/userroutes.js";
import getdata from './controllers/data.js';
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
dbconnect();

app.use('/user' , userroutes);
app.use('/user/getdata' , getdata);


app.listen(3000, ()=>{
    console.log("server started...");
})

