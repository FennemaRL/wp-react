import React, { Component } from "react";
import navLogo from "../img/logo-bandmaid.png";
import "./nav.css";
import { Link, BrowserRouter } from "react-router-dom";

class Nav extends Component {
  state = {};
  render() {
    return (
      <header
        style={{
          paddingTop: "14px",
          paddingLeft: "30px",
          paddingBottom: "12px"
        }}
      >
        <a href="google.com">
          <img src={navLogo} className="logoWidth" alt="band-Maid logo" />
        </a>
        <p id="displayMobile">burger</p>
        <nav style={{ color: "white" }}>
          <ul>
            <BrowserRouter>
              <li>
                <Link to="/">News</Link>
              </li>
              <li>
                <Link to="/">Biography</Link>
              </li>
              <li>
                <Link to="/">Concert</Link>
              </li>
              <li>
                <Link to="/">Discography</Link>
              </li>
            </BrowserRouter>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Nav;
