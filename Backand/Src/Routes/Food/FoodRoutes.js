import express from "express"
import { addFood } from "../../controllers/foodController";
import multer from "multer";


const foodRouter = express.Router();

//image storage engine 

const storage = multer.diskStorage({
    destination: "uploads",
    filename:(req,res,cd)=>{
         return cd(null,`${Date.now()}${file.originalname}`)
    }
})

const upload = multer({String:storage})

foodRouter.post("/add",upload.single("image"),  addFood);


export default foodRouter;
