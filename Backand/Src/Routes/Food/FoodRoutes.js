import express from "express"
import { addFood } from "../../controllers/foodController";
import multer from "multer";


const foodRouter = express.Router();

//image storage engine 

const storage = multer.diskStorage({
    destination: "uploads",
    // filename:()
})


foodRouter.post("/add",addFood);


export default foodRouter;
