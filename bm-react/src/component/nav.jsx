import React from "react";
import navLogo from "../img/logo-bandmaid.png";
import "./nav.css";
import { NavLink } from "react-router-dom";

const navlinkStile = {
  textDecorationLine: "underline"
};

const Nav = props => {
  return (
    <header>
      <NavLink to="/" className="logoWrap">
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
      <button className="buttonToggle" onClick={props.togglelateralM}>
        <div className="line" />
        <div className="line" />
        <div className="line" />
      </button>
    </header>
  );
};

export default Nav;
