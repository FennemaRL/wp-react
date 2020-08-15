import React, { useState, useRef, useEffect } from "react";
import "./dialogDisk.css";

function getTracks(linkAlbum, setTracks, setAlbumLink, firstTry = false) {
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
      if (
        error.status === 401 &&
        error.message === "The access token expired"
      ) {
        localStorage.removeItem("tokenBM");
        if (firstTry) getTracks(linkAlbum, setTracks, setAlbumLink, true);
        /*for refresh the token only 1 time */
      }
    });
}

const DialogDisk = ({album,close, display}) => {
  const [tracks, setTracks] = useState({});
  const [albumlink, setAlbumLink] = useState("");

  let diskWrapper = useRef(null);
  useEffect(() => {
    document.addEventListener("click", handleClickOutside, false);
    return () => {
      document.removeEventListener("click", handleClickOutside, false);
    };
  });

  const handleClickOutside = event => {
    if (diskWrapper.current && !diskWrapper.current.contains(event.target)) {
      close();
    }
  };

  if (album && !tracks.length && (!albumlink || albumlink !== album.href))
    getTracks(album.href, setTracks, setAlbumLink);

    return (
      (album && !tracks.length && albumlink === album.href) &&
      <div className={display ? "dialogDisk" : "dialogDisk hidden"}>
        <div ref={diskWrapper} className="diskRevw">
          <button className="closebutton" onClick={close}>
            X
          </button>
          <h1>{album.name}</h1>
          <div className="imagenNsongs">
            <img src={album.images[0].url} alt="" />
            <div className="content">
              <h3>Tracks</h3>
              <div className="songs">
                {tracks.items.map((song, index) => (
                  <Song song={song} key={index} index={index}/>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
};

const Song = ({song, index}) =>{
  return (
    <div className="song" key={song.name}>
      <p>{index + 1 + "." + song.name}</p>
      <p>{parseDuration(song)}</p>
    </div>
  )
}
const parseDuration=(song)=> (s => s + "0".repeat(6 - s.length))(
  (song.duration_ms / 60000)
    .toString()
    .substr(0, 4)
    .replace(".", " : ")
)
export default DialogDisk;
