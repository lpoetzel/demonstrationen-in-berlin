import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navBar">
      <ul>
        <NavLink to="/">
          <li>Start</li>
        </NavLink>
        <NavLink to="/calendar">
          <li>Kalendar</li>
        </NavLink>
        <NavLink to="/impressum">
          <li>Impressum</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default NavBar;
