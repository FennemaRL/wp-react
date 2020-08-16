import React, { useState, useEffect } from "react";
import axios from "axios";
import YouTube from "react-youtube";

let configReprod ={
  playerVars: {
    autoplay: 0,
    origin: window.location.origin + "/BandMaidFP"}
 }
function LatestVideo(){
  
  const [videos, setVideos] = useState([])
  useEffect(()=>{
    let kg = process.env.REACT_APP_GK;
    let bmuid = process.env.REACT_APP_bmuid;
      axios
        .get(
          `https://www.googleapis.com/youtube/v3/search?key=${kg}&channelId=${bmuid}&part=snippet,id&order=date&maxResults=1&showinfo=0&enablejsapi=1`
        )
        .then(res => {
          setVideos(res.data.items )
        })
        .catch(e => () => {});
  },[])
  
  console.log(configReprod.playerVars.origin)
  return (
      <div>
        <h1>Latest Video</h1>
          {!!videos.length &&
            videos.map(video => (
                <YouTube
                  videoId={video.id.videoId}
                  opts={configReprod}
                  key={video.id.videoId}
                  containerClassName={"youtubeContainer"}
                />
              )
            )}
      </div>
    )
}

export default LatestVideo;
