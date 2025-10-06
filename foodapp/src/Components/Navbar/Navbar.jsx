import React, { useState } from 'react'
import styles from './Navbar.module.css';
import { assets } from '../../assets/frontend_assets/assets.js'

function Navbar() {

  const [menu,setMenu] = useState("Home");

  return (
    <div className={styles.Navbar}>
      <img src={assets.logo} className={styles.logo} alt="logo" />
      <ul className={styles.navbar_memu}>
        <li
          onClick={() => setMenu("Home")}
          className={menu === "Home" ? styles.active : ""}
        >
          Home
        </li>
        <li
          onClick={() => setMenu("Menu")}
          className={menu === "Menu" ? styles.active : ""}
        >
          Menu
        </li>
        <li
          onClick={() => setMenu("mobile-app")}
          className={menu === "mobile-app" ? styles.active : ""}
        >
          Mobile-App
        </li>
        <li
          onClick={() => setMenu("contact-us")}
          className={menu === "contact-us" ? styles.active : ""}
        >
          Contact Us
        </li>
      </ul>

      <div className={styles.navbar_right}>
        <img src={assets.search_icon} alt="serarch icon" />
        <div className={styles.NavbarSearchIcon}>
          <img src={assets.basket_icon} alt="basket icon" />
          <div className={styles.dot}></div>
        </div>
        <button>Sign in</button>
      </div>
    </div>
  );
}

export default Navbar
