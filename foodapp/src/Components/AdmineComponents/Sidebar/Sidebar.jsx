import React from "react";
import styles from "./Sidebar.module.css";
import { assets } from "../../../assets/admin_assets/assets.js";
import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <div className={styles.Sidebar}>
      <div className={styles.sidebar_options}>
        <NavLink
          to="/add"
          className={({ isActive }) =>
            `${styles.sidebar_option} ${isActive ? styles.active : ""}`
          }
        >
          <img src={assets.add_icon} alt="add icon" />
          <p>Add Items</p>
        </NavLink>

        <NavLink
          to="/list"
          className={({ isActive }) =>
            `${styles.sidebar_option} ${isActive ? styles.active : ""}`
          }
        >
          <img src={assets.order_icon} alt="order icon" />
          <p>List Items</p>
        </NavLink>

        <NavLink
          to="/order"
          className={({ isActive }) =>
            `${styles.sidebar_option} ${isActive ? styles.active : ""}`
          }
        >
          <img src={assets.order_icon} alt="order icon" />
          <p>Orders</p>
        </NavLink>
      </div>
    </div>
  );
}

export default Sidebar;
