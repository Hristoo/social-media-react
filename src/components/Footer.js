import React from "react";

import "./Footer.css"

const Footer = () => {
const date = new Date();

  return (
    <div className="footer">
      <p>&copy; {date.getFullYear()} Hristo Dimitrov</p>
    </div>
  );
};

export default Footer;
