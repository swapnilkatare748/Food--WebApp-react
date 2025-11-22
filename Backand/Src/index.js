import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import connectDB from "./db/db.js";
import router from "./Routes/routes.js";


dotenv.config();
const app = express();

//data base connection 
connectDB();

//middleware 
app.use(cors());
app.use(express.json());

app.use("/apis",router);


app.use("/app",(req,res)=>{
    res.send("welcome priduct services to the app !");
});

export default app 



