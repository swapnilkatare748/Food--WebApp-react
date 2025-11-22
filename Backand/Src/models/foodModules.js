import mongoose from "mongoose";

const foodSchema = new mongoose.Schema({
    name:{type:String,required:true},
    descrption:{type:Number,required:true},
    price:{type:String,require:true},
    Image:{type:String,require:true},
    category:{type:String,require:true}

})

const foodModel = mongoose.models.food || mongoose.model("food",foodSchema);

export default foodModel;

