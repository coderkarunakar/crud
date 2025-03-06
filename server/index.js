import express from "express";
import mongoose  from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";


//initializing our app
const app = express();
app.use(bodyParser.json());
app.use(cors());
dotenv.config();


//setting the port, or if not available keeping the 7000 as by default
const PORT = process.env.PORT || 7000;
//to get the db connection url string 
const URL = process.env.MONGOURL;
mongoose.connect(URL).then(() => {
    console.log("Db connected Successfully");
    app.listen(PORT, ()=>{
        console.log(`Server is running on Port : ${PORT}`);
    })
}).catch(error => console.log(error))