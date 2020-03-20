import React from "react";
import MediaButtons from "./mediabuttons";

const Footer = () => {
  return (
    <footer className="flexCenter">
      <p>© {new Date().getFullYear()} Band-Maid. All Rights Reserved. </p>
      <div className="flexCenter">
        <h3>Follow us on : </h3>
        <MediaButtons />
      </div>
    </footer>
  );
};

export default Footer;
