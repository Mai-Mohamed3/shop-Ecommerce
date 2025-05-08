import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css"; 

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <h3>E<i class="fa fa-heart"></i>Shop</h3>
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/"><i className="fa fa-home"></i> Home</Link>
        </li>
        <li>
          <Link to="/products"><i className="fa fa-box"></i> Products</Link>
        </li>
        <li>
          <Link to="/cart"><i className="fa fa-shopping-cart"></i> Cart</Link>
        </li>
        <li>
          <Link to="/login"><i className="fa fa-user"></i> Login</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
