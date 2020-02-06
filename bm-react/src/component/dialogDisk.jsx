import React, { useState } from "react";
import "./dialogDisk.css";

async function getTracks(linkAlbum, setTracks, setAlbumLink, firstTry = false) {
  let key = localStorage.getItem("tokenBM");

  let myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${key}`);

  let requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow"
  };
  fetch(`${linkAlbum}/tracks`, requestOptions)
    .then(response => response.text())
    .then(result => {
      let resultobj = JSON.parse(result);
      if (resultobj.error) {
        throw resultobj.error;
      }
      setTracks(resultobj);
      setAlbumLink(linkAlbum);
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
          ? this.getTracks(linkAlbum, setTracks, setAlbumLink, true)
          : /*for refresh the token only 1 time */
            console.log("no se refresca mas :(");
      }
    });
}

const DialogDisk = props => {
  let dialogshow = props.display ? "dialogDisk" : "dialogDisk hidden";
  let album = props.album;
  const [tracks, setTracks] = useState({});
  const [albumlink, setAlbumLink] = useState("");
  album && !tracks.length && (!albumlink || albumlink !== album.href)
    ? getTracks(album.href, setTracks, setAlbumLink)
    : console.log();

  album.images ? console.log() : console.log("ppaa");

  if (album && !tracks.length && albumlink === album.href) {
    console.log(tracks);
    return (
      <>
        <div className={dialogshow + " bg"} onClick={props.close} />
        <div className={dialogshow}>
          <div className="trackRevw">
            <button className="closebutton" onClick={props.close}>
              X
            </button>
            <h1>{album.name}</h1>
            <div className="imagenNsongs">
              <img src={album.images[0].url} alt="" />
              <div>
                <h3>Tracks</h3>
                <div className="songs">
                  {tracks.items.map(song => (
                    <div className="song" key={song.name}>
                      <p>{song.name}</p>
                      <p>
                        {(song.duration_ms / 60000).toString().substr(0, 4)}{" "}
                        mins
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
  return null;
};
export default DialogDisk;
