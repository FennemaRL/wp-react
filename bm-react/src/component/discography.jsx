import React, { Component } from "react";
class Discography extends Component {
  state = {};

  componentDidMount() {
    let key = process.env.REACT_APP_SK;
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Basic ${key}`);
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    var urlencoded = new URLSearchParams();
    urlencoded.append("grant_type", "client_credentials");

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: urlencoded,
      redirect: "follow"
    };

    fetch("https://accounts.spotify.com/api/token", requestOptions)
      .then(response => response.text())
      .then(result => {
        this.setState({ result });
        console.log(result);
      })
      .catch(error => console.log("error", error));
  }
  render() {
    return (
      <div className="container">
        <h1>Discography</h1>
        <div className="principal disco"></div>
      </div>
    );
  }
}

export default Discography;
