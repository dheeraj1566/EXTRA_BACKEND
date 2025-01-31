import express from "express";
// import { postData } from "../controllers/formcontrol.js";
import {postData} from "../controllers/formcontrol.js";

export const formRouter = express.Router();

// Route to add form data
formRouter.post("/add", postData);
