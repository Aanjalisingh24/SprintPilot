import dotenv from "dotenv";
dotenv.config();
import express from 'express';
import userroutes from "./routes/userroutes.js";
import  dbconnect  from "./db/db.js";
import cors from "cors";
const app = express();

app.use(cors());
app.use(express.json());
dbconnect();

app.use('/user' , userroutes);


app.listen(3000, ()=>{
    console.log("server started...");
})

