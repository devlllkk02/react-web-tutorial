import React from "react";
import { Link } from "react-router-dom";

import "./Navbar.scss";

function Navbar({ page }) {

  function HomeLinkStyle(current_page) {
    if (page === "home" && current_page === page) {
      return { color: "orange" };
    } else {
      return { color: "grey" };
    }
  }
  function AboutLinkStyle(current_page) {
    if (page === "about" && current_page === page) {
      return { color: "orange" };
    } else {
      return { color: "grey" };
    }
  }
  function ServicesLinkStyle(current_page) {
    if (page === "services" && current_page === page) {
      return { color: "orange" };
    } else {
      return { color: "grey" };
    }
  }
  function ContactLinkStyle(current_page) {
    if (page === "contact" && current_page === page) {
      return { color: "orange" };
    } else {
      return { color: "grey" };
    }
  }

  return (
    <div className="navbar">
      <div className="navbar__logo">
        <img src="./Images/Rizetta_LOGO.png" alt="" />
      </div>
      <div className="navbar__links">
        <ul>
          <li>
            <Link
              className="navbar__links__link"
              to="/"
              style={HomeLinkStyle("home")}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className="navbar__links__link"
              to="/about"
              style={AboutLinkStyle("about")}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              className="navbar__links__link"
              to="/services"
              style={ServicesLinkStyle("services")}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              className="navbar__links__link"
              to="/contact"
              style={ContactLinkStyle("contact")}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
