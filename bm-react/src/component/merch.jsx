import React, { Component } from "react";
import oj from "../img/onlyJapan.jpg";
import ww from "../img/wordwide.jpg";
class merch extends Component {
  state = {
    stores: [
      { img: oj, srcs: "https://bandmaidstore.myshopify.com/" },
      { img: ww, srcs: "http://bandmaidshop.com/" }
    ]
  };
  render() {
    return (
      <div style={{ paddingBottom: "50px" }}>
        <h1>Merch</h1>
        <div
          style={{
            textAlign: "center",
            display: "inline"
          }}
        >
          {this.state.stores.map(store => {
            return (
              <a href={store.srcs} key={store.srcs}>
                <img
                  src={store.img}
                  alt="link to the shop where you can find our merchandising"
                  style={{ width: "35%", padding: "15px" }}
                />
              </a>
            );
          })}
        </div>
      </div>
    );
  }
}

export default merch;
