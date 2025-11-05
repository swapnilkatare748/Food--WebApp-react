import React, { useState } from 'react'
import styles from "./LoginPopup.module.css";
import { assets } from '../../assets/frontend_assets/assets';

function LoginPopup({ setShowLogin }) {
  const [currentState, setcurrentState] = useState("Sign Up");

  return (
    <div className={styles.LoginPopup}>
      <form action="" className={styles.login_popup_container}>
        <div className={styles.login_popup_title}>
          <h2> {currentState} </h2>
          <img
            src={assets.cross_icon}
            alt="Corss_icon"
            onClick={() => setShowLogin(false)}
          />
        </div>
        <div className={styles.login_popup_inputs}>
          {currentState === "Login" ? (
            <></>
          ) : (
            <input type="text" placeholder="Name" required />
          )}
          <input type="Email" placeholder="Email" required />
          <input type="Password" placeholder="Password" required />
        </div>
        <button>
          {currentState === "Sign Up" ? "Create Acount" : "Login"}{" "}
        </button>

        <div className={styles.login_popup_condition}>
          <input type="checkbox" required />
          <p>By containing ,i agree to the term of use & privacy and policy </p>
        </div>
        {currentState == "Login" ? (
          <p>
            Create a new Account ?{" "}
            <span onClick={() => setcurrentState("Sign Up")}>Click hear</span>
          </p>
        ) : (
          <p>
            Already have acount ?{" "}
            <span onClick={() => setcurrentState("Login")}>Login hear </span>
          </p>
        )}
      </form>
    </div>
  );
}

export default LoginPopup
