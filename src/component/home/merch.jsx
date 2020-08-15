import React from "react";
import oj from "../img/onlyJapan.jpg";
import ww from "../img/wordwide.jpg";

let stores= [ { img: oj, srcs: "https://bandmaidstore.myshopify.com/" },
{ img: ww, srcs: "http://bandmaidshop.com/" }]

function Merch(){
    return (
      <div className="merch">
        <h1>Merch</h1>
        <div>
          {stores.map(store => {
            return (
              <a href={store.srcs} key={store.srcs} className="merchImg">
                <img
                  src={store.img}
                  alt="link to the shop where you can find our merchandising"
                />
              </a>
            );
          })}
        </div>
      </div>
    )
}

export default Merch;
