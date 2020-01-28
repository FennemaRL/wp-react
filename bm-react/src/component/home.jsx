import React, { Component } from "react";
import "./home.css";
import ig from "../img/socialMediaIcon/instagram.svg";
import yt from "../img/socialMediaIcon/youtube.svg";
import tw from "../img/socialMediaIcon/twitter.svg";
class Home extends Component {
  state = {};
  render() {
    return (
      <div>
        <div className="socialMedia">
          <figure>
            <img src={ig} alt="referencia a her instagram" />
          </figure>
          <figure>
            <img src={yt} alt="referencia a her youtube" />
          </figure>
          <figure>
            <img src={tw} alt="referencia a her twitter" />
          </figure>
        </div>
        <div className="bgPrincipal">
          <button id="actionCall">papa</button>
        </div>
      </div>
    );
  }
}

export default Home;
