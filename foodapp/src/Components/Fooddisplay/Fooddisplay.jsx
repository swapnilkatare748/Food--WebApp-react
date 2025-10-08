import React, { useContext } from 'react';
import styles from './fooddisplay.module.css';
import { StoreContext } from '../../context/storedContaxt';
import Fooditem from '../Fooditem/Fooditem';


function Fooddisplay() {

    const { food_list } = useContext(StoreContext);

    return (
    <div className={styles.Fooddisplay}>
       <h2>Top dishes near you.</h2>
       <div className={styles.FooddisplayList}>
          {
            food_list.map((item,index)=>{
                return <Fooditem kay={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image}/>
            })
          }
       </div>
    </div>
  )
}

export default Fooddisplay
