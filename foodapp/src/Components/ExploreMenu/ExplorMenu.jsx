import React from 'react';
import styles from './ExplorMenu.module.css';
 import { menu_list } from '../../assets/frontend_assets/assets.js';

function ExplorMenu({Category,setCategory}) {
  return (
    <div className={styles.ExplorMenu}>
      <h1>Explore our menu </h1>
      <p className={styles.ExplorMenu_text}>Chose from a diverse munu featuring a delectable array of dishes . Our mission is to start enw item and food.</p>
      <div className={styles.Explore_menu_list}>
         {
            menu_list.map((item,index)=>{
               return (
                  <div onClick={()=>setCategory(prev => prev === item.menu_name?"All":item.menu_name)} key={index} className={styles.explore_menu_list_item}>
                  <img src={item.menu_image} className={Category === item.menu_name ? styles.active : ""} alt="This is images" />
                  <p> {item.menu_name} </p>
                  </div>
               );
            })
         }
      </div>
    </div>
  )
}

export default ExplorMenu
