import React, { Component } from "react";
import ig from "../img/socialMediaIcon/instagram.svg";
import yt from "../img/socialMediaIcon/youtube.svg";
import tw from "../img/socialMediaIcon/twitter.svg";

class MediaButtons extends Component {
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
    ]
  };
  render() {
    return (
      <div className="socialMedia">
        {this.state.socialMedias.map(obj => {
          return (
            <a href={obj.hf} key={obj.alti}>
              <img src={obj.srci} alt={obj.alti} />
            </a>
          );
        })}
      </div>
    );
  }
}

export default MediaButtons;
