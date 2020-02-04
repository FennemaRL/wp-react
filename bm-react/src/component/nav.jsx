import React, { Component } from "react";
import navLogo from "../img/logo-bandmaid.png";
import "./nav.css";
import { NavLink } from "react-router-dom";

const navlinkStile = {
  textDecorationLine: "underline"
};

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
        <NavLink to="/">
          <img src={navLogo} className="logoWidth" alt="band-Maid logo" />
        </NavLink>
        <div className="space"></div>
        <nav>
          <ul>
            <li>
              <NavLink activeStyle={navlinkStile} to="/Biography">
                Biography
              </NavLink>
            </li>
            <li>
              <NavLink activeStyle={navlinkStile} to="/music">
                Listen Us
              </NavLink>
            </li>
            <li>
              <NavLink activeStyle={navlinkStile} to="/Discography">
                Discography
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Nav;
