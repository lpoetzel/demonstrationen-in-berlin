import React from "react";
import { NavLink } from "react-router-dom";
import "./BurgerMenuList.styles.css";

export default function BurgerMenuList({ close }) {
  return (
    <div className="menu">
      <ul>
        <li>
          <NavLink onClick={close} activeclassName="current" to="/">
            START
          </NavLink>
        </li>
        <li>
          <NavLink onClick={close} activeclassName="current" to="calendar">
            KALENDER
          </NavLink>
        </li>
        <li>
          <NavLink onClick={close} activeclassName="current" to="impressum">
            IMPRESSUM
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
