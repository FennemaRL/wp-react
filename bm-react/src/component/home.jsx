import React, { Component } from "react";
import "./home.css";
import ad from "../img/arrowdown.svg";
import Concerts from "./concerts";
import LatestVideo from "./latestvideo";
import Merch from "./merch";

class Home extends Component {
  constructor(props) {
    super(props);
    this.secondSref = React.createRef();
  }

  render() {
    return (
      <div>
        {/*hero */}
        <div className="bgPrincipal">
          <a
            className="dropdown"
            href="/"
            onClick={e => {
              e.preventDefault();
              window.scrollTo({
                top: this.secondSref.current.offsetTop - 72.8 /*a mejorar */,
                behavior: "smooth"
              });
            }}
          >
            <img src={ad} id="actionCall" alt="scrollToSecondSection" />
          </a>
        </div>
        {/*secondSection*/}
        <div className="secondSection" ref={this.secondSref}>
          <div className="subSection">
            <Concerts />
          </div>
          <div className="group">
            <div className="subSection">
              <LatestVideo />
            </div>
            <div className="subSection">
              <Merch />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
