import React from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const NavBar = () => {
  return (
    <div className="navBar">
      <ul>
        <NavLink to="/">
          <li>Home</li>
        </NavLink>
        <NavLink to="/calendar">
          <li>Calendar</li>
        </NavLink>
        <NavLink to="/impressum">
          <li>Impressum</li>
        </NavLink>
      </ul>
      <button>
        <FaTimes />
      </button>
      <button>
        <FaBars />
      </button>
    </div>
  );
};

export default NavBar;
