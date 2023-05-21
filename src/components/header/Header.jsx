import React, { useState, useEffect } from "react";
import "./Header.css";
import { BiMenuAltRight } from "react-icons/bi";
import OutsideClickHandler from "react-outside-click-handler";
import Login from "../login/Login";

const Header = () => {
  const [menuOpened, setMenuOpened] = useState();
  const getMenuStyles = (menuOpened) => {
    if (document.documentElement.clientWidth <= 800) {
      return { right: !menuOpened && "-100%" };
    }
  }

  const [isEnterPressed, setIsEnterPressed] = useState(false);

  return (
    <section className="h-wrapper">
      <div className="flexCenter paddings innerWidth h-container">
        <img src="./umbrella-logo.png" alt="Umbrella Logo" />

        <OutsideClickHandler onOutsideClick={() => setMenuOpened(false)}>
          <div className="flexCenter h-menu" style={getMenuStyles(menuOpened)}>
            <a href="#products">Produtos</a>
            <a href="#regenerate">Regenerate®</a>
            <a href="#values">Valores</a>
            <a href="#contacts">Contatos</a>
            <a onClick={() => setIsEnterPressed(!isEnterPressed)}>
              Entrar
            </a>
            <button className="button">
              <a href="#launch">Lançamento</a>
            </button>
          </div>

          <Login isEnterPressed={isEnterPressed} />
          <div
            className="menu-icon"
            onClick={() => setMenuOpened((prev) => !prev)}
          >
            <BiMenuAltRight size={50} />
          </div>
        </OutsideClickHandler>
      </div>
    </section>
  );
};

export default Header;
