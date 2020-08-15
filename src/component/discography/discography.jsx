import React, { useState, useEffect } from "react";
import tokenSpotify from "../auth";
import DialogDisk from "./dialogDisk";
import "./discography.css";

function Discography (){
  const [albums, setAlbums] = useState([])
  const [filters, setFilter] = useState([
    { type: "all", active: true },
    { type: "album", active: false },
    { type: "single", active: false }])
  const [albumr, setAlbumr] = useState("")


  useEffect(()=>{
    const  getAlbums = async (artists, firstTry = true)=> {
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
          setAlbums(albums.concat(
            albumsd.reduce(
              (unique, item) =>
                unique.map(i => i.name).includes(item.name)
                  ? unique
                  : [...unique, item],
              []
            )
          ))
        })
        .catch(error => {
          if (
            error.status === 401 &&
            error.message === "The access token expired"
          ) {
            localStorage.removeItem("tokenBM");
            if (firstTry) getAlbums(artists, false);
            /*for refresh the token only 1 time */
          }
        });
    }
    getAlbums("5Wh3G01Xfxn2zzEZNpuYHH");
    getAlbums("2OIN4qI2EqAsEhrVlnfi02");
  },[])
  const filterFunc =(filter) =>{
    if (filter.active) return;

    let filtersmod = filters.map(filterunmod =>
      filterunmod.type === filter.type
        ? { ...filterunmod, active: true }
        : { ...filterunmod, active: false }
    );
    let functfilter =
      filter.type === "all"
        ? a => true
        : filter2comparetype => filter.type === filter2comparetype;
    let albumsfilters = albums.map(album =>
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
    setFilter(filtersmod)
    setAlbums(albumsfilters)
  }
  const closeDisk =() =>{
    setAlbumr(false)
  }
    return (
      <div className="container">
        <h1>Discography</h1>
        <DialogDisk
          album={albumr}
          display={albumr}
          close={() => closeDisk()}
        />
        <div className="filters">
          {filters.map(filter =>(
              <a
                href={`filter albums by  ${filter.type}`}
                key={filter.type}
                style={filter.active ? { color: "#fff301" } : {}}
                onClick={e => {
                  e.preventDefault();
                  filterFunc(filter);
                }}
              >
                {filter.type}
              </a>
            ))}
        </div>
        <div className="principal albums">
          {albums.map(album =>( 
            <Tape album={album} setAlbumr={setAlbumr}/>
            ))}
        </div>
      </div>
    )
}

const Tape=({album, setAlbumr})=>{
  return (
    <div
    key={album.name}
    className={"album ".concat(`${album.classStyle}`)}
  >
    <img
      src={album.images[0].url}
      alt="album cover"
      onClick={() => {
        setAlbumr(album)
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

  )
}
export default Discography;
