import React from "react";
import { NavLink } from "react-router-dom";
import "./BurgerMenuList.styles.css";

export default function BurgerMenuList({ close }) {
  return (
    <div className="menu">
      <ul>
        <li>
          <NavLink onClick={close} activeClassName="current" to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink onClick={close} activeClassName="current" to="about">
            About
          </NavLink>
        </li>
        <li>
          <NavLink onClick={close} activeClassName="current" to="contact">
            Contact
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
