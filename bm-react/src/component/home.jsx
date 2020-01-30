import React, { Component } from "react";
import "./home.css";
import ig from "../img/socialMediaIcon/instagram.svg";
import yt from "../img/socialMediaIcon/youtube.svg";
import tw from "../img/socialMediaIcon/twitter.svg";
import ad from "../img/arrowdown.svg";
import Concerts from "./concerts";
import LatestVideo from "./latestvideo";
import Merch from "./merch";

class Home extends Component {
  state = {
    socialMedias: [
      {
        srci: ig,
        hf: "https://www.instagram.com/bandmaid.jp/",
        alti: "referencia a her instagram"
      },
      {
        srci: yt,
        hf: "https://www.youtube.com/user/BANDMAID",
        alti: "referencia a her youtube"
      },
      {
        srci: tw,
        hf: "https://twitter.com/bandmaid",
        alti: "referencia a her twitter"
      }
    ],
    secondSref: React.createRef()
  };
  render() {
    return (
      <div>
        {/*mediabuttons*/}
        <div className="socialMedia">
          {this.state.socialMedias.map(obj => {
            return (
              <a href={obj.hf} key={obj.alti}>
                <img src={obj.srci} alt={obj.alti} />
              </a>
            );
          })}
        </div>
        {/*hero */}
        <div className="bgPrincipal" ref="endPrincipal">
          <a
            href="/"
            onClick={e => {
              e.preventDefault();
              this.secondSref.julie.scrollIntoView(true);
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
          <div className="subSection">
            <LatestVideo />
          </div>
          <div className="subSection">
            <Merch />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
