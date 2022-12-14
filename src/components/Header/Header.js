import React from "react";
import NavBar from "../NavBar";
import Popup from "reactjs-popup";
import BurgerMenuIcon from "../BurgerMenuIcon/BurgerMenuIcon";
import BurgerMenuList from "../BurgerMenuList/BurgerMenuList";
import "./Header.styles.css";

const contentStyle = {
  background: "rgba(255,255,255,0)",
  width: "80%",
  border: "none",
};
const Header = () => {
  return (
    <header>
      <div className="navbar">
        <NavBar />
      </div>

      <div className="burger-icon">
        <Popup
          modal
          overlayStyle={{ background: "rgba(255,255,255,0.98" }}
          contentStyle={contentStyle}
          closeOnDocumentClick={false}
          trigger={(open) => <BurgerMenuIcon open={open} />}
        >
          {(close) => <BurgerMenuList close={close} />}
        </Popup>
      </div>
    </header>
  );
};

export default Header;
