import mongoose from "mongoose";

const connectDB = async () =>{
    try{
        await mongoose.connect(process.env.MONGO_DB);
        console.log("MongoDB connection sucessfull");
    }catch(error){
        console.log("Data base connection error : ",error);
    }
};

export default connectDB;