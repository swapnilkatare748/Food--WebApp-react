import foodModel from "../models/foodModules.js";
import fs from "fs"

// add food item 

const addFood = async (req,res)=>{

    const image_fileName = req.file ? req.file.filename : null;

    const food = new foodModel({
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      category: req.body.category,
      image: image_fileName,
    });

    try
    {
        await food.save();
        res.json({success:true,message:"Food Added"})
    }catch(error){

        console.log(error),
        res.json({success:false,message:" adding food error"})
        
    }
}

//list food 
//http://localhost:8000/apis/food/list

const listFood = async(req,res)=>{

    try{
        const foods = await foodModel.find({});
        res.json({success:true,data:foods});

    }catch(error){
             console.log("error to fatch the food list ");
             res.json({success:false,message:"Adding Food Error"});
    }
}

// remove food item 
const removeFood = async(req,res)=>{

    try{
         const food = await foodModel.findById(req.body._id); 
          fs.unlink(`uploads/${food.image}`,()=>{})
          await foodModel.findByIdAndDelete(req.body._id);
          res.json({success:true, message : " Food removed"});
        }
    catch(error){
        console.log("item not delete error occurs : ",error);
        res.json({success:false,message:"Food item delete error"});
        }
}



export { addFood, listFood, removeFood };