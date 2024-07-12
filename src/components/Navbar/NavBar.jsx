import React from 'react';
import png from "./file.png";
import "./Navbar.css";
import { FaShoppingCart } from 'react-icons/fa';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo-container">
        <img src={png} alt="Logo" className="logo" />
      </div>
      <div className="nav-links">
        <button className="nav-btn">About Me</button>
        <button className="nav-btn">Services</button>
        <button className="nav-btn">Products</button>
        <div style={{
          display:"flex",
          alignItems:"center"
        }}>
                 <FaShoppingCart size={30} color='#808080'/>
        </div>
 
        <button className="login-btn">Login</button>
      </div>
    </div>
  );
};

export default Navbar;
