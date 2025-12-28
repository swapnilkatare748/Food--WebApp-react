import React, { useState } from 'react'
import styles from "./AddPage.module.css";
import { assets } from "./../../../assets/admin_assets/assets.js"
import axios from "axios";
import { toast } from "react-toastify";


function AddPage() {


const API_URL = import.meta.env.VITE_API_URL;
 const [image,setImage] = useState(false);
 const [data,setData] = useState({

  name:"",
  description:"",
  price:"",
  category:"Salad"

 });

 const onChangeHandler=(event)=>{
    const name = event.target.name;
    const value= event.target.value;
    setData(data=>({...data,[name]:value}))
 }


 const onSumbitHandlar= async(event)=>{
   event.preventDefault();
   const formData = new FormData();
   formData.append("name",data.name);
   formData.append("description", data.description);
   formData.append("price", Number(data.price));
   formData.append("category", data.category);
   formData.append("image", image);

   const response = await axios.post(`${API_URL}/add`, formData);

   if(response.data.success){
         setData({
          
              name:"",
              description:"",
              price:"",
              category:"Salad"
         });
         setImage(false);
         toast.success(response.data.message);
   }
   else{
       console.log("error occurs in add product");
       toast.error(response.data.message);

      }


 } 

//  useEffect(()=>{
//  console.log("data :",data);
//  },[data])

  return (
    <div className={styles.addPage}>
      <form onSubmit={onSumbitHandlar} className={styles.flex_column}>
        <div className={`${styles.add_img_upload} ${styles.flex_column}`}>
          <p>Upload Image</p>
          <label htmlFor="image">
            <img
              src={image ? URL.createObjectURL(image) : assets.upload_area}
              alt="upload area "
            />
          </label>
          <input
            onChange={(e) => setImage(e.target.files[0])}
            type="file"
            id="image"
            name="image"
            hidden
            required
          />
        </div>
        <div className={`${styles.add_product_name} ${styles.flex_column}`}>
          <p>Product Name </p>
          <input
            onChange={onChangeHandler}
            value={data.name}
            type="text"
            name="name"
            placeholder="type hear"
          />
        </div>
        <div
          className={`${styles.add_product_description} ${styles.flex_column}`}
        >
          <p>Product Description </p>
          <textarea
            name="description"
            rows="6"
            onChange={onChangeHandler}
            value={data.description}
            placeholder="write content hear..."
          ></textarea>
        </div>
        <div className={`${styles.add_catagory_price}`}>
          <div className={`${styles.add_category} ${styles.flex_column}`}>
            <p>Product Catagory</p>
            <select
              onChange={onChangeHandler}
              value={data.category}
              name="category"
            >
              <option value="Salad">Salad</option>
              <option value="Rolls">Rolls</option>
              <option value="Deserts">Deserts</option>
              <option value="Sandwich">Sandwich</option>
              <option value="Cake">Cake</option>
              <option value="Pure vage">Pure vage</option>
              <option value="Pasta">Pasta</option>
              <option value="Noodles">Noodles</option>
            </select>
          </div>
          <div className={`${styles.add_price} ${styles.flex_column}`}>
            <p> Product Price</p>
            <input
              type="number"
              onChange={onChangeHandler}
              value={data.price}
              name="price"
              placeholder="$200"
            />
          </div>
        </div>
        <button type="Submit" className={styles.add_button}>
          {" "}
          ADD{" "}
        </button>
      </form>
    </div>
  );
}

export default AddPage
