import React, { useContext } from 'react';
import styles from './Cart.module.css';
import { StoreContext } from "../../context/storedContaxt.jsx";
import { useNavigate } from 'react-router-dom';

function Cart() {
  const { cartItem, food_list, removeFormCart, GetTotoleCartAmount } =
    useContext(StoreContext);
  
  const navigate = useNavigate();

  return (
    <div className={styles.Cart}>
      <div className={styles.classitems}>
        <div className={styles.cart_item_title}>
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>  
          <p>Quantiti</p>
          <p>Totle</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartItem[item._id] > 0) {
            return (
              <div>
                <div
                  className={`${styles.cart_item_title}  ${styles.cart_items_item}`}
                >
                  <img src={item.image} alt="image" />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{cartItem[item._id]}</p>
                  <p>${item.price * cartItem[item._id]}</p>
                  <p
                    className={styles.cross}
                    onClick={() => removeFormCart(item._id)}
                  >
                    {" "}
                    X{" "}
                  </p>
                </div>
                <hr />
              </div>
            );
          }
        })}
      </div>
      <div className={styles.cart_bottom}>
        <div className={styles.cart_totle}>
          <h2> Cart Totals</h2>
          <div>
            <div className={styles.Cart_totle_details}>
              <p>SubTotal</p>
              <p>${GetTotoleCartAmount()===0 ? 0 :GetTotoleCartAmount()}</p>
            </div>
            <hr />
            <div className={styles.Cart_totle_details}>
              <p>Delevery fee </p>
              <p>${GetTotoleCartAmount()===0 ? 0 : 2}</p>
            </div>
            <hr />
            <div className={styles.Cart_totle_details}>
              <b>Totle </b>
              <b>${GetTotoleCartAmount()===0 ? 0 : GetTotoleCartAmount() + 2}</b>
            </div>
            <button onClick={() => navigate("/PlaceOrder")}>
              POCESS TO CHACKOUT
            </button>
          </div>
        </div>
        <div className={styles.cart_promocode}>
          <div>
            <p> if you have promo code ,Enter it here </p>
            <div className={styles.Cart_promocode_input}>
              <input type="text" placeholder="Promocode" />
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Cart
