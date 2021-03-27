import React from "react";
import "./Navbar.scss";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar__logo">
        <img src="./Images/Rizetta_LOGO.png" alt="" />
      </div>
      <div className="navbar__links">
        <ul>
          <li>Home</li>
          <li>Contact</li>
          <li>About</li>
          <li>Services</li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
