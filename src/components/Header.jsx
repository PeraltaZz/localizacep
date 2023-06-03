import React from "react";
import logo from "../images/localizacep-logo.svg";

const Header = () => {
  return (
    <header className="header-bg d-flex">
      <nav className="header-nav">
        <a href="./">
          <img src={logo} alt="LocalizaCep Logo" />
        </a>
      </nav>
    </header>
  );
};

export default Header;