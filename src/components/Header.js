import React from "react";

import  "./Header.css"
import Button from "./UI/Button";

const Header = () => {
  return (
    <header className="header">
      {" "}
      <a href="/" className="logo">
        HristAgram
      </a>
      <div className="header-right">
        <a className="active" href="#home">
          Home
        </a>
        <a href="#contact">Contact</a>
        <Button >Logout</Button>
      </div>
    </header>
  );
};

export default Header;
