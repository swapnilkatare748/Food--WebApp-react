import express from "express"
import foodRouter from "./Food/FoodRoutes.js";


const router = express.Router();


router.use("/food",foodRouter);
router.use("/images", express.static("uploads"));


export default router;