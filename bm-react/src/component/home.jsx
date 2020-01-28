import React, { Component } from "react";
import "./home.css";
import ig from "../img/socialMediaIcon/instagram.svg";
import yt from "../img/socialMediaIcon/youtube.svg";
import tw from "../img/socialMediaIcon/twitter.svg";
import ad from "../img/arrowdown.svg";

class Home extends Component {
  state = {
    socialMedias: [
      {
        srci: ig,
        hf: "https://www.google.com.ar",
        alti: "referencia a her instagram"
      },
      {
        srci: yt,
        hf: "https://www.google.com.ar",
        alti: "referencia a her youtube"
      },
      {
        srci: tw,
        hf: "https://www.google.com.ar",
        alti: "referencia a her twitter"
      }
    ]
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
        {/*hero*/}
        <div className="bgPrincipal">
          <a onClick="">
            <img src={ad} id="actionCall" alt="" />
          </a>
        </div>
        {/*secondSection*/}
        <div className="secondSection" style={{ minHeight: "100vh" }}>
          <h1> Next live's</h1>
        </div>
      </div>
    );
  }
}

export default Home;
