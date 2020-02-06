import React from "react";
import navLogo from "../img/logo-bandmaid.png";
import "./nav.css";
import { NavLink } from "react-router-dom";

const navlinkStile = {
  textDecorationLine: "underline"
};
const Nav = props => {
  let buttonEffect = props.buttonTransform ? "line rotate" : "line";
  return (
    <header>
      <NavLink to="/" className="logoWrap">
        <img src={navLogo} className="logoWidth" alt="band-Maid logo" />
      </NavLink>
      <div className="space"></div>
      <button className="buttonToggle" onClick={props.fclose}>
        <div className={buttonEffect} />
        <div className={buttonEffect} />
        <div className={buttonEffect} />
      </button>
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
};

export default Nav;
