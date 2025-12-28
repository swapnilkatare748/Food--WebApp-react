import React, { useState } from 'react'
import './App.css';
import { Routes ,Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Cart from "./Pages/Cart/Cart";
import PlaceOrder from "./Pages/PlaceOrder/PlaceOrder";
import "./index.css";
import LoginPopup from './Components/LoginPopup/LoginPopup';
import AdmineHome from './Pages/AdminePages/AdmineHome/AdmineHome';
import AdminLayout from './Layout/AdminLayout';
import MainLayout from './Layout/MainLayout';
import OrdersPage from './Pages/AdminePages/AdmineOrders/OrdersPage';
import LIstItemsPage from './Pages/AdminePages/ListAdminePage/LIstItemsPage';
import AddPage from './Pages/AdminePages/AddItemspage/AddPage';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function App() {

  const[ShowLogin,setShowLogin] = useState(false)

  return (
    <>
      <div className='main-app'>
        
        <ToastContainer/>

        <Routes>
        
          {/* MAIN ROUTS */}
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/PlaceOrder" element={<PlaceOrder />} />
          </Route>


          {/* ADMIN ROUTES */}
          <Route element={<AdminLayout />}>
            <Route path="/admine" element={<AdmineHome />} />
            <Route path="/list" element={<LIstItemsPage/>} />
            <Route path="/order" element={<OrdersPage/>} />
            <Route path="/add" element={<AddPage/>} />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App
