import React, { Component } from "react";

class Components extends Component {
  state = { concerts: [{ date: "19 / 1 / 2020", place: "Aliern square" }] };
  /*call api for recopile data about next concerts*/
  render() {
    let concerts = this.state.concerts;
    return (
      true && (
        <div style={{ width: "80%", marginLeft: "10%", textAlign: "center" }}>
          <h1>Concerts</h1>
          <table style={{ width: "80wh" }}>
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
                      <td>{concert.date}</td>
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
