import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import LoginPopup from "../Components/LoginPopup/LoginPopup";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import '../App.css';

const MainLayout = () => {
  const [ShowLogin, setShowLogin] = useState(false);

  return (
    <>
      {ShowLogin && <LoginPopup setShowLogin={setShowLogin} />}
      <div className="app">
        <Navbar setShowLogin={setShowLogin} />
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default MainLayout;
