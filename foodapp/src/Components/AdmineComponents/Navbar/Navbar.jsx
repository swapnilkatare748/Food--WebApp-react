import React from 'react'
import styles from './Navbar.module.css';
import { assets } from '../../../assets/admin_assets/assets.js';

function Navbar() {
  return (
    <div className={styles.Navbar}>
        <img  className={styles.logo} src={assets.logo} alt="logo" />
        <img  className={styles.profile_image} src={assets.profile_image} alt='profile image'/>

    </div>
  )
}

export default Navbar
