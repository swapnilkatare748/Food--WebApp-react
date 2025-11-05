import React from 'react'
import styles from "./AppDownload.module.css";
import { assets } from '../../assets/frontend_assets/assets';

function AppDownload() {
  return (
    <div className={styles.AppDownload} id='AppDownload'>
      <p>
        For batter experance Download <br /> Tomato App{" "}
      </p>
      <div className={styles.app_download_platform}>
        <img src={assets.play_store} alt="play store" />
        <img src={assets.app_store} alt="App store" />
      </div>
    </div>
  );
}

export default AppDownload
