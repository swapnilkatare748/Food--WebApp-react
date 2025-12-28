import { Outlet } from "react-router-dom";
import Navbar from "../Components/AdmineComponents/Navbar/Navbar";
import Sidebar from "../Components/AdmineComponents/Sidebar/Sidebar";
import '../App.css';

const AdminLayout = () => {
  return (
    <div className="admin-app">
      <Navbar />
      <hr />

      {/* Sidebar + Page Content */}
      <div className="admin-main">
        <Sidebar />

        <div className="admin-content">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
