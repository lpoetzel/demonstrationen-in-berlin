import React from "react";
import { NavLink } from "react-router-dom";

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
    </div>
  );
};

export default NavBar;
