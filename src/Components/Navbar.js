import React from 'react';
import { NavLink } from 'react-router-dom';
import { useCart } from "react-use-cart";
import "../index.css";

function Navbar() {
  const { totalItems } = useCart(); 

  return (
    <>
      {/* Top Bar */}
      <div className="main_navbar">
        <h3>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</h3>
        <NavLink to="/home" className="shop-now-NavLink">ShopNow</NavLink>
        <div className="language_selector">
          <select className="form_select" aria-label="Language select">
            <option value="en">English</option>
            <option value="es">Español - ES</option>
            <option value="ar">العربية - AR</option>
            <option value="de">Deutsch - DE</option>
            <option value="he">עברית - HE</option>
            <option value="ko">한국어 - KO</option>
            <option value="pt">Português - PT</option>
            <option value="zh">中文 (简体) - ZH</option>
            <option value="zh-tw">中文 (繁體) - ZH</option>
            <option value="fr">Français - FR</option>
          </select>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="s_navbar">
        <div className="navbar">
          <div className="logo">
            <h1>Exclusive</h1>
          </div>
          <nav>
            <ul>
              <li>
                <NavLink to="/home" className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink>
              </li>
              <li>
                <NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>About</NavLink>
              </li>
              <li>
                <NavLink to="/contact" className={({ isActive }) => isActive ? "active" : ""}>Contact</NavLink>
              </li>
              <li>
                <NavLink to="/signup" className={({ isActive }) => isActive ? "active" : ""}>Signup</NavLink>
              </li>
            </ul>
          </nav>
          <div className="search">
            <input type="text" placeholder="What are you looking for?" aria-label="search_placeholder" />
            <i className="fas fa-search" aria-hidden="true"></i>
          </div>
          <div className="nav-icons">
            <NavLink className={({ isActive }) => isActive ? "active" : "NavLink-i"} to="/Wishlist">
              <i className="fa-regular fa-heart"></i>
            </NavLink>
            <NavLink
              to="/ShoppingCart"
              className={({ isActive }) => isActive ? "active nav-cart" : "NavLink-i nav-cart"}
            >
              <i className="fas fa-shopping-cart"></i>
              {totalItems > 0 && (
                <span className="cart-badge">{totalItems}</span>
              )}
            </NavLink>
            <NavLink className={({ isActive }) => isActive ? "active" : "NavLink-i"} to="/MyAccount">
              <i className="fa-regular fa-user"></i>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}
export default Navbar;
