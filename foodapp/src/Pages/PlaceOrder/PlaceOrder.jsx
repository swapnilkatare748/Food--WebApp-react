import React from 'react';
import styles from './PlaceOrder.module.css';
import { useContext } from 'react';
import { StoreContext } from '../../context/storedContaxt';


function PlaceOrder() {

  const {GetTotoleCartAmount} = useContext(StoreContext); 

  return (
    <div className={styles.PlaceOrder}>
      <div className={styles.Place_order_left}>
        <p className={styles.title} > Divilary information </p>
        <div className={styles.multi_fildes}>
          <input type="text" placeholder="Fist Name" />
          <input type="text" placeholder="Last Name" />
        </div>
        <input type="Email" placeholder="Email" />
        <input type="text" placeholder="Street" />
        <div className={styles.multi_fildes}>
          <input type="text" placeholder="City" />
          <input type="text" placeholder="State" />
        </div>
        <div className={styles.multi_fildes}>
          <input type="text" placeholder="Zip Code" />
          <input type="text" placeholder="Country" />
        </div>
        <input type="text" placeholder="Phone no" />
      </div>
      <div className={styles.place_order_write}>
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
      </div>
    </div>
  );
}

export default PlaceOrder
