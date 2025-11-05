import React from 'react'
import styles from "./Footer.module.css";
import { assets } from '../../assets/frontend_assets/assets';


function Footer() {
  return (
    <>
      <div className={styles.Footer} id="footer">
        <div className={styles.footer_content}>
          <div className={styles.footer_content_left}>
            <img src={assets.logo} alt="logo" />
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta
              sit molestias sint? Consequuntur sequi suscipit esse dignissimos
              autem alias impedit, assumenda sed culpa facilis odio quo
              accusantium repellendus commodi fuga?
            </p>
            <div className={styles.footer_social_icons}>
              <img src={assets.facebook_icon} alt="facebook icon" />
              <img src={assets.twitter_icon} alt="tweeter icon" />
              <img src={assets.linkedin_icon} alt="linkedIN icon " />
            </div>
          </div>
          <div className={styles.footer_content_righr}>
            <h2>COMPANY</h2>
            <ul>
              <li>Home</li>
              <li>About as</li>
              <li>Delevery</li>
              <li>Polisces</li>
            </ul>
          </div>
          <div className={styles.footer_content_center}>
            <h2>GATE IN TUCH</h2>
            <ul>
              <li>+91 9637053245</li>
              <li>Contact@tomoto.com</li>
            </ul>
          </div>
        </div>

        <hr />
        <p className={styles.Footer_copyWrite}>
          Copywrites 2024 @ Tomato.come - All Writes recived
        </p>
      </div>
    </>
  );
}

export default Footer
