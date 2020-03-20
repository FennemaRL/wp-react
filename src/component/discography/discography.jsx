import React, { Component } from "react";
import tokenSpotify from "../auth";
import DialogDisk from "./dialogDisk";
import "./discography.css";
class Discography extends Component {
  state = {
    albums: [],
    filters: [
      { type: "all", active: true },
      { type: "album", active: false },
      { type: "single", active: false }
    ],
    albumr: ""
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
  filterFunc(filter) {
    if (filter.active) return;

    let filtersmod = this.state.filters.map(filterunmod =>
      filterunmod.type === filter.type
        ? { ...filterunmod, active: true }
        : { ...filterunmod, active: false }
    );
    let functfilter =
      filter.type === "all"
        ? a => true
        : filter2comparetype => filter.type === filter2comparetype;
    let albumsfilters = this.state.albums.map(album =>
      functfilter(album.album_type)
        ? {
            ...album,
            classStyle: ""
          }
        : {
            ...album,
            classStyle: " hidden"
          }
    );
    this.setState({ filters: filtersmod, albums: albumsfilters });
  }
  render() {
    return (
      <div className="container">
        <h1>Discography</h1>
        <DialogDisk
          album={this.state.albumr}
          display={!(this.state.albumr === "")}
          close={() => this.setState({ albumr: "" })}
        />
        <div className="filters">
          {this.state.filters.map(filter => {
            return (
              <a
                href={`filter albums by  ${filter.type}`}
                key={filter.type}
                style={filter.active ? { color: "#fff301" } : {}}
                onClick={e => {
                  e.preventDefault();
                  this.filterFunc(filter);
                }}
              >
                {filter.type}
              </a>
            );
          })}
        </div>
        <div className="principal albums">
          {this.state.albums.map(album => {
            return (
              <div
                key={album.name}
                className={"album ".concat(`${album.classStyle}`)}
              >
                <img
                  src={album.images[0].url}
                  alt="album cover"
                  onClick={() => {
                    this.setState({ albumr: album });
                  }}
                />
                <p onClick={() => this.setState({ albumr: album })}>
                  {album.name}
                </p>
                <p
                  className="color"
                  onClick={() => this.setState({ albumr: album })}
                >
                  {album.release_date}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Discography;
