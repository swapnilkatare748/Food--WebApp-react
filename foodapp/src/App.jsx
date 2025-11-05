import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar';
import './App.css';
import { Routes ,Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Footer from './Components/Footer/Footer';
import Cart from "./Pages/Cart/Cart";
import PlaceOrder from "./Pages/PlaceOrder/PlaceOrder";
import "./index.css";
import LoginPopup from './Components/LoginPopup/LoginPopup';

function App() {

  const[ShowLogin,setShowLogin] = useState(false)

  return (
    <>
      {ShowLogin ? <LoginPopup setShowLogin = {setShowLogin} /> : <></>}
      <div className="app">
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/PlaceOrder" element={<PlaceOrder />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App
