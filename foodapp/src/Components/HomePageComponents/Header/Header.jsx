import React from 'react';
import styles from './Header.module.css';


function Header() {
  return (
    <div className={styles.Header}>
      <div className={styles.heder_contents}>
        <h2>
          Order your <br /> favourate food here
        </h2>
        <p>
          Choose from a diverse menu featuring a delectable array of dishes
          crafted with the finest ingredients and authentic flavors. <br />
          Savor sweet delicacies, flavorful main courses, and refreshing
          beverages — all made to delight your taste buds and satisfy every
          craving. <br />
        </p>
        <button>View Menu</button>
      </div>
    </div>
  );
}

export default Header
