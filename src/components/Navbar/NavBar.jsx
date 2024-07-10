import React from 'react';
import png from "./file.png";
import "./Navbar.css";

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
        <button className="login-btn">Login</button>
      </div>
    </div>
  );
};

export default Navbar;
