import React from 'react';
import { NavLink } from "react-router-dom";
import "../../App.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <ul>
        <li>
          <NavLink to="/Women-Fashion" className={({ isActive }) => isActive ? "active" : ""}>
            Women's Fashion
          </NavLink>
        </li>
        <li>
          <NavLink to="/Men-Fashion" className={({ isActive }) => isActive ? "active" : ""}>
            Men's Fashion
          </NavLink>
        </li>
        <li>
          <NavLink to="/Electronics" className={({ isActive }) => isActive ? "active" : ""}>
            Electronics
          </NavLink>
        </li>
        <li>
          <NavLink to="/HomeLifestyle" className={({ isActive }) => isActive ? "active" : ""}>
            Home & Lifestyle
          </NavLink>
        </li>
        <li>
          <NavLink to="/Medicine" className={({ isActive }) => isActive ? "active" : ""}>
            Medicine
          </NavLink>
        </li>
        <li>
          <NavLink to="/SportsOutdoor" className={({ isActive }) => isActive ? "active" : ""}>
            Sports & Outdoor
          </NavLink>
        </li>
        <li>
          <NavLink to="/BabyToys" className={({ isActive }) => isActive ? "active" : ""}>
            Baby's & Toys
          </NavLink>
        </li>
        <li>
          <NavLink to="/GroceriesPets" className={({ isActive }) => isActive ? "active" : ""}>
            Groceries & Pets
          </NavLink>
        </li>
        <li>
          <NavLink to="/HealthBeauty" className={({ isActive }) => isActive ? "active" : ""}>
            Health & Beauty
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
