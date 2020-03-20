import React, { useState, useRef, useEffect } from "react";
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
      if (
        error.status === 401 &&
        error.message === "The access token expired"
      ) {
        localStorage.removeItem("tokenBM");
        if (firstTry) this.getTracks(linkAlbum, setTracks, setAlbumLink, true);
        /*for refresh the token only 1 time */
      }
    });
}

const DialogDisk = props => {
  let album = props.album;
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
      props.close();
    }
  };

  if (album && !tracks.length && (!albumlink || albumlink !== album.href))
    getTracks(album.href, setTracks, setAlbumLink);
  if (album && !tracks.length && albumlink === album.href) {
    return (
      <div className={props.display ? "dialogDisk" : "dialogDisk hidden"}>
        <div ref={diskWrapper} className="diskRevw">
          <button className="closebutton" onClick={props.close}>
            X
          </button>
          <h1>{album.name}</h1>
          <div className="imagenNsongs">
            <img src={album.images[0].url} alt="" />
            <div className="content">
              <h3>Tracks</h3>
              <div className="songs">
                {tracks.items.map((song, index) => (
                  <div className="song" key={song.name}>
                    <p>{index + 1 + "." + song.name}</p>
                    <p>
                      {(s => s + "0".repeat(6 - s.length))(
                        (song.duration_ms / 60000)
                          .toString()
                          .substr(0, 4)
                          .replace(".", " : ")
                      )}
                      {console.log(
                        song.name,
                        song.duration_ms,
                        song.duration_ms / 60000
                      )}{" "}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return null;
};
export default DialogDisk;
