import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

const NavBar = () => {
  return (
    <div className="navBar">
      <i>
        <img src={logo} alt="logo" />
      </i>
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
