import React, { Component } from "react";
import "./biography.css";
import bmwd from "../img/history-bm.jpg";

import saikimg from "../img/members/saiki.jpg";
import kanaimg from "../img/members/kanami2.jpg";
import akaneimg from "../img/members/akane2.jpg";
import misaimg from "../img/members/misa2.jpg";
import mikuimg from "../img/members/miku2.jpg";

import icosaiki from "../img/members/icosaiki.png";
import icokanami from "../img/members/icokanami.png";
import icomisa from "../img/members/icomisa.png";
import icoakane from "../img/members/icoakane.png";
import icomiku from "../img/members/icokuruppo.png";

import ig from "../img/socialMediaIcon/instagram.svg";
import twt from "../img/socialMediaIcon/twitter.svg";

class Biography extends Component {
  state = {
    members: [
      {
        name: "Saiki Atsumi",
        image: saikimg,
        description:
          "With a cool and badass demeanour, she usually sports an entirely black maid uniform with a blue rose in her hair." +
          " She may look like a maid but she won’t give you a maid greeting and she certainly doesn’t have a Maid ‘charm point’.",
        story:
          "Saiki is the last member joined this group through an audition in August of 2013",
        ico: icosaiki,
        roll: "Main voice",
        twt: "https://twitter.com/saiki_bandmaid",
        ig: "www.instagram.com/saiki_bandmaid/"
      },
      {
        name: "Kanami Tono",
        image: kanaimg,
        description:
          "Kanami usually wears a black and white maid outfit with a lace bonnet and prefers to be called Kanamincho (or Mincho, for short)." +
          " The band members describe Kanami as a strange, natural airhead, clueless to situations and she’s just as you see her",
        story: "She was the first member recruited by miku through an audition",
        ico: icokanami,
        roll: "Main guitar",
        twt: "https://twitter.com/kanami_bandmaid",
        ig: "https://www.instagram.com/kanami_bandmaid/"
      },
      {
        name: "Kobato Miku",
        image: mikuimg,
        description:
          "She usually sports a traditional white and black maid outfit, with a red rose in her hair, and admits to goofing off regularly during rehearsals." +
          "Always said that herself is a pigeon, and usually end her line with -po!, with her “Kuruppo!” catchphrase.",
        story:
          "Miku had the idea of having a band while working at a maid cafe and that idea became Band-Maid",
        ico: icomiku,
        roll: "Voice/Guitar",
        twt: "https://twitter.com/miku_bandmaid",
        ig: "https://www.instagram.com/kobatomiku/"
      },
      {
        name: "Misa",
        image: misaimg,
        description:
          "She wears long black dresses and is known to like her whiskey",
        ico: icomisa,
        story: "Misa was suggested by akane to join the band",
        roll: "Bass",
        twt: "https://twitter.com/misa_bandmaid",
        ig: "www.instagram.com/misa_bandmaid/"
      },
      {
        name: "Akane Hirose",
        image: akaneimg,
        description:
          " She usually wears a black and white maid uniform, as well as a small hat. Her Maid ‘charm point’ is that she has a really big appetite",
        ico: icoakane,
        story: "Akane whas suggested by kanami to join the band",
        roll: "Drums",
        twt: "https://twitter.com/achi_bandmaid",
        ig: "https://www.instagram.com/akane_bandmaid/"
      }
    ]
  };
  render() {
    let members = this.state.members;
    return (
      <div className="container">
        <h1>Biography</h1>
        <div className="principal">
          <div className="composeImgWithDescription">
            <img src={bmwd} alt="band maid - word domination tour" />
            <div className="texthp">
              <h3>History</h3>
              <hr />
              <p>
                The band, first known as BAND-MAID, formed in July 2013.
                Singer/guitarist Miku Kobato, formerly an employee of a Japanese
                maid café, envisioned forming a band that juxtaposed the maid
                image with rock music. his image is modeled on maid café
                hostesses, with the standard uniform adapted to match each
                member's personality. In interviews, they explained the concept
                came from founding member Miku Kobato who had previously worked
                at a maid cafe in Akihabara
              </p>
            </div>
          </div>
          <h2>Members</h2>
          {members.map(member => {
            return (
              <div key={member.name} className="memberStyle">
                <div className="title">
                  <h4>{member.name}</h4>
                  <img
                    className="ico"
                    src={member.ico}
                    alt="icon of world domination "
                  />
                </div>
                <div className="composeImgWithDescription">
                  <img
                    className="photo"
                    src={member.image}
                    alt="a member of band maid"
                  />
                  <div className="texthp">
                    <h5>Roll : {member.roll} </h5>
                    <p>Join : {member.story} </p>
                    <p>Description : {member.description} </p>
                    <p>
                      Social media :
                      <a href={member.ig}>
                        <img
                          src={ig}
                          alt="link to instagram socialmedia"
                          className="socialMediaIcon"
                        ></img>
                      </a>
                      <a href={member.twt}>
                        <img
                          className="socialMediaIcon"
                          src={twt}
                          alt="link to twitter socialmedia"
                        ></img>
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Biography;
