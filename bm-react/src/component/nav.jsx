import React, { Component } from "react";
import navLogo from "../img/logo-bandmaid.png";
import "./nav.css";
import { Link } from "react-router-dom";

class Nav extends Component {
  render() {
    return (
      <header
        style={{
          paddingTop: "14px",
          paddingLeft: "30px",
          paddingBottom: "12px"
        }}
      >
        {" "}
        <Link to="/">
          <img src={navLogo} className="logoWidth" alt="band-Maid logo" />
        </Link>
        <p id="displayMobile">burger</p>
        <nav style={{ color: "white" }}>
          <ul>
            <li>
              <Link to="/Biography">Biography</Link>
            </li>
            <li>
              <Link to="/">Listen Us</Link>
            </li>
            <li>
              <Link to="/Discography">Discography</Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Nav;
