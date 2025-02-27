import React from "react";
import "./Header.css";
import logo from "C:\\Users\\balas\\Documents\\scrimba_react\\reactfacts\\src\\assets\\react.svg"; // Adjust the path if needed

function Header() {
  return (
    <header className="header">
      <img src={logo} alt="React Logo" className="logo" />
      <h2 className="title">ReactFacts</h2>
    </header>
  );
}

export default Header;
