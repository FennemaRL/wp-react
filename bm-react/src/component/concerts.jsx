import React, { Component } from "react";
import "./concerts.css";

class Components extends Component {
  state = {
    concerts: [
      { date: "10.1.2020", place: "Diamon Hall" },
      { date: "11.1.2020", place: "Kobe Harbor Studio" },
      { date: "18.1.2020", place: "Caparvo Hall" },
      { date: "13.2.2020", place: "Shibuya Public Hall" }
      /*{ date: "14.2.2020", place: "Shibuya Public Hall" },
      { date: "23.3.2020", place: "KnotFest" },
      { date: "15.05.2020", place: "Bggb" },
      { date: "16.05.2020", place: "Bggb" },
      { date: "17 .05.2020", place: "Bggb" },
      { date: "16.05.2020", place: "Music festival" }*/
    ]
  };
  /*call api for recopile data about next concerts*/
  render() {
    let concerts = this.state.concerts;
    return (
      concerts.length && (
        <div className="concerts">
          <h1>Concerts</h1>
          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Place</th>
              </tr>
            </thead>
            <tbody>
              {concerts.map((concert, k) => {
                return (
                  <React.Fragment key={k}>
                    <tr>
                      <td className="dated">{concert.date}</td>
                      <td>{concert.place}</td>
                    </tr>
                  </React.Fragment>
                );
              })}
            </tbody>
          </table>
        </div>
      )
    );
  }
}

export default Components;
