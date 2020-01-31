import React, { Component } from "react";
import "./biography.css";
import bmwd from "../img/history-bm.jpg";
import saikimg from "../img/members/saiki.jpg";
import icosaiki from "../img/members/icosaiki.png";
class Biography extends Component {
  state = {
    members: [
      {
        name: "Saiki",
        image: saikimg,
        description: "",
        ico: icosaiki,
        roll: "Principal voice",
        twt: "saiki_bandmaid",
        ig: "saiki_bandmaid/"
      }
    ]
  };
  render() {
    let members = this.state.members;
    return (
      <div
        className="bio"
        style={{ paddingTop: "14vh", textAlign: "center", minHeight: "80.4vh" }}
      >
        <h1>Biography</h1>
        <div className="Principal">
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
          <h4>Members</h4>
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
                  <img src={member.image} alt="a member of band maid" />
                  <div className="texthp">
                    <h5>roll : {member.roll}</h5>
                    <p> description : {member.description}</p>
                    <p> social media :</p>
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
