import React, { useContext, useState } from 'react'
import styles from './Navbar.module.css';
import { assets } from '../../assets/frontend_assets/assets.js'
import {Link} from 'react-router-dom';
import { StoreContext } from '../../context/storedContaxt.jsx';

function Navbar({ setShowLogin }) {
  const [menu, setMenu] = useState("Home");
  const { GetTotoleCartAmount } = useContext(StoreContext);

  return (
    <div className={styles.Navbar}>
      <Link to="/">
        <img src={assets.logo} className={styles.logo} alt="logo" />
      </Link>
      <ul className={styles.navbar_memu}>
        <Link
          to="/"
          onClick={() => setMenu("Home")}
          className={menu === "Home" ? styles.active : ""}
        >
          Home
        </Link>
        <a
          href="#explore_menu"
          onClick={() => setMenu("Menu")}
          className={menu === "Menu" ? styles.active : ""}
        >
          Menu
        </a>
        <a
          href="#AppDownload"
          onClick={() => setMenu("mobile-app")}
          className={menu === "mobile-app" ? styles.active : ""}
        >
          Mobile-App
        </a>
        <a
          href="#footer"
          onClick={() => setMenu("contact-us")}
          className={menu === "contact-us" ? styles.active : ""}
        >
          Contact Us
        </a>
      </ul>

      <div className={styles.navbar_right}>
        <img src={assets.search_icon} alt="serarch icon" />
        <div className={styles.NavbarSearchIcon}>
          <Link to="/cart">
            <img src={assets.basket_icon} alt="basket icon" />
            <div
              className={GetTotoleCartAmount() === 0 ? "" : styles.dot}
            ></div>
          </Link>
        </div>
        <button onClick={() => setShowLogin(true)}>Sign in</button>
      </div>
    </div>
  );
}

export default Navbar
