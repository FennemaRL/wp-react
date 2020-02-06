import React from "react";
import "./phoneMenu.css";
import { NavLink } from "react-router-dom";
const navlinkStile = {
  textDecorationLine: "underline"
};
const PhoneMenu = props => {
  let style = props.display ? "menuPhone" : "menuPhone hidden";
  let pmr = React.createRef();
  let shadow = props.display ? "shadowMenuPhone" : "shadowMenuPhone hidden";
  console.log(pmr);
  return (
    <>
      <div className={style} ref={pmr}>
        <div />

        <NavLink
          activeStyle={navlinkStile}
          to="/Biography"
          onClick={props.fclose}
        >
          Biography
        </NavLink>
        <NavLink activeStyle={navlinkStile} to="/music" onClick={props.fclose}>
          Listen Us
        </NavLink>
        <NavLink
          activeStyle={navlinkStile}
          to="/Discography"
          onClick={props.fclose}
        >
          Discography
        </NavLink>

        <div />
      </div>
      <div className={shadow}></div>
    </>
  );
};
export default PhoneMenu;
