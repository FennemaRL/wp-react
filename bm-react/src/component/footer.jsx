import React from "react";
import MediaButtons from "./mediabuttons";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="socialMediaLinks">
        <div className="space" />
        <h3>Follow us on : </h3>
        <MediaButtons />
        <div className="space" />
      </div>
      <p>© {new Date().getFullYear()} BM. All Rights Reserved. </p>
    </footer>
  );
};

export default Footer;
