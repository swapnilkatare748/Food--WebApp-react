import React from 'react';
import styles from './ExplorMenu.module.css';
 import { menu_list } from '../../assets/frontend_assets/assets';

function ExplorMenu() {
  return (
    <div className={styles.ExplorMenu}>
      <h1>Explore our menu </h1>
      <p className={styles.ExplorMenu_text}>Chose from a diverse munu featuring a delectable array of dishes . Our mission is to start enw item and food.</p>
      <div className={styles.Explore_menu_list}>
         {
            menu_list.map((item,index)=>{
              <div key={index} className="explore_menu_list_item">
                  <img src={item.menu_image} alt=""/>
                   <p>{item.menu_name}</p>
              </div>
            })
         }
      </div>
    </div>
  )
}

export default ExplorMenu
