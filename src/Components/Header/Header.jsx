import React from "react";
import "./Header.css";
import logo from "../../assets/logo.png";  // If your file is in /src/assets/

function Header() {
  return (
    <header className="header">
      <img src={logo} alt="React Logo" className="logo" />
      <h2 className="title">ReactFacts</h2>
    </header>
  );
}

export default Header;
