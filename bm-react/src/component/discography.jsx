import React, { Component } from "react";
import tokenSpotify from "./auth";
import "./discography.css";
class Discography extends Component {
  state = {
    albums: []
  };

  async getAlbums(artists, firstTry = true) {
    let key =
      localStorage.getItem("tokenBM") ||
      (!(await tokenSpotify()) && localStorage.getItem("tokenBM"));

    let myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${key}`);

    let requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow"
    };
    fetch(
      `https://api.spotify.com/v1/artists/${artists}/albums`,
      requestOptions
    )
      .then(response => response.text())
      .then(result => {
        let resultobj = JSON.parse(result);
        if (resultobj.error) {
          throw resultobj.error;
        }
        let albumsd = resultobj.items;
        this.setState({
          albums: this.state.albums.concat(
            albumsd.reduce(
              (unique, item) =>
                unique.map(i => i.name).includes(item.name)
                  ? unique
                  : [...unique, item],
              []
            )
          )
        });
      })
      .catch(error => {
        console.log("error");
        console.log(error);
        if (
          error.status === 401 &&
          error.message === "The access token expired"
        ) {
          localStorage.removeItem("tokenBM");
          firstTry
            ? this.getAlbums(artists, false)
            : /*for refresh the token only 1 time */
              console.log("no se refresca mas :(");
        }
      });
  }
  componentDidMount() {
    this.getAlbums("5Wh3G01Xfxn2zzEZNpuYHH");
    this.getAlbums("2OIN4qI2EqAsEhrVlnfi02");
  }
  render() {
    return (
      <div className="container">
        <h1>Discography</h1>
        <div className="filters"></div>
        <div className="principal albums">
          {this.state.albums.map(album => {
            return (
              <div key={album.name} className="album" style={album.filterStyle}>
                <img src={album.images[0].url} alt="album cover" />
                <p>{album.name}</p>
                <p className="date">{album.release_date}</p>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Discography;
