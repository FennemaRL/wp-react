import React from "react";
import navLogo from "../img/logo-bandmaid.png";
import "./nav.css";
import { NavLink } from "react-router-dom";

const navlinkStile = {
  fontWeight: "bold",
};
const Nav = props => {
  let buttonEffect = props.buttonTransform ? "line rotate" : "line";
  return (
    <header>
      <NavLink to="/" className="logoWrap">
        <img src={navLogo} className="logoWidth" alt="band-Maid logo" />
      </NavLink>
      <div className="buttonWrap">
        <button className="buttonToggle" onClick={props.fclose}>
          <div className={buttonEffect} />
          <div className={buttonEffect} />
          <div className={buttonEffect} />
        </button>
      </div>
      <nav>
        <ul>
          <li>
            <NavLink activeStyle={navlinkStile} to="/BandMaidFP/Biography">
              Biography
            </NavLink>
          </li>
          <li>
            <NavLink activeStyle={navlinkStile} to="/BandMaidFP/music">
              Listen Us
            </NavLink>
          </li>
          <li>
            <NavLink activeStyle={navlinkStile} to="/BandMaidFP/Discography">
              Discography
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
