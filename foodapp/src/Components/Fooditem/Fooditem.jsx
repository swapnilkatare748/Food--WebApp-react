import React, { useContext, useState } from 'react';
import styles from "./Fooditem.module.css";
import { assets } from '../../assets/frontend_assets/assets';
import { StoreContext } from '../../context/storedContaxt';


function Fooditem({ id, name, price, description, image }) {


  const { cartItem, addToCart, removeFormCart } = useContext(StoreContext);

  return (
    <div className={styles.FoodItem}>
      <div className={styles.Food_item_container}>
        <img src={image} alt="image1" className={styles.FoodItemImage} />
        {!cartItem[id] ? (
          <img
            className={styles.add}
            onClick={ ()=>addToCart(id)}
            src={assets.add_icon_white}
          />
        ) : (
          <div className={styles.food_item_counter}>
            <img  onClick={()=>removeFormCart(id)} src={assets.remove_icon_red} alt="" />
            <p>{cartItem[id]}</p>
            <img  onClick={()=>addToCart(id)} src={assets.add_icon_green} alt="" />
          </div>
        )}
      </div>
      <div className={styles.FoodItemInfo}>
        <div className={styles.FoodItemNameRating}>
          <p> {name}</p>
          <img src={assets.rating_starts} alt="reating stars" />
        </div>
        <p className={styles.Description}>{description}</p>
        <p className={styles.FoodItemPrice}>${price}</p>
      </div>
    </div>
  );
}

export default Fooditem
