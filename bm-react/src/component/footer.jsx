import React, { Component } from "react";

class Footer extends Component {
  state = {};
  render() {
    return (
      <footer className="footer" style={{}}>
        <p>© {new Date().getFullYear()} BM. All Rights Reserved. </p>
      </footer>
    );
  }
}

export default Footer;
