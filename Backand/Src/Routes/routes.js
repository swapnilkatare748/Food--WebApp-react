import express from "express"
import foodRouter from "./Food/FoodRoutes";

const router = express.Router();


router.use("./food",foodRouter);


export default router;