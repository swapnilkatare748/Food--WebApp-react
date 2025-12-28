import express from "express"
import {
  addFood,
  listFood,
  removeFood,
} from "../../controllers/foodController.js";
import multer from "multer";
import path from "path";


const foodRouter = express.Router();

//image storage engine 

const storage = multer.diskStorage({
    destination: "uploads/",
    filename:(req,file,cb)=>{
          cb(null, Date.now() + path.extname(file.originalname));
    }
})

const upload = multer({ storage });

foodRouter.post("/add",upload.single("image"),addFood);
foodRouter.get("/list",listFood);
foodRouter.delete("/delete",removeFood);


export default foodRouter;
