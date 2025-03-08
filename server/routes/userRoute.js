import express from "express";
import { create,getAll, getOne } from "../controller/userController.js";
//initializing  a router from express
const route = express.Router();

//creating a router for create api using post 
//this create is from usercontroller.js file create api,and defined a random route name called /create
route.post("/create", create);
route.get("/getall",getAll);
route.get("/getallbyId/:id",getOne);
export  default route;