import React, { useEffect, useState } from "react";
import styles from "./listitemspage.module.css";
import { toast } from "react-toastify";
import {getAllFoods } from "../../../services/FoodItems.js";


function LIstItemsPage() {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);

  const IMAGE_URL = import.meta.env.VITE_IMAGE_URL;

  useEffect(() => {
    const fetchFoods = async () => {
      try {
        const foods = await getAllFoods();
        setList(foods);
      } catch (error) {
        toast.error("Failed to load food items");
      } finally {
        setLoading(false);
      }
    };

    fetchFoods();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div className={`${styles.listPage} flex_column`}>
      <p>All Food List</p>
      <div className={styles.list_table}>
        <div className="list_table_format">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Action</b>
        </div>
        {list.length === 0 ? (
          <p>No food items found</p>
        ) : (
          list.map((item) => (
            <div key={item._id} className={styles.list_table_format}>
              <img src={`${IMAGE_URL}/${item.image}`} alt="item.image"/>
              <p>{item.name}</p>
              <p>${item.price}</p>
              <p>X</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default LIstItemsPage;

