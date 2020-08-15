import React, { useState, useEffect } from "react";
import axios from "axios";
import YouTube from "react-youtube";

let configReprod ={
  playerVars: {autoplay: 0},
  min: window.innerWidth < 768
 }
function LatestVideo(){
  
  const [videos, setVideos] = useState([])
  const [dimensions, setDimensions] = useState({ 
    height: "400px",
    width: "60%"
  })
  
  useEffect(()=>{
    function handleResize() {
      setDimensions({
        height: window.innerWidth < 768 ?  300 : 400 ,
        width: window.innerWidth < 768 ? "95%" :"60%",
        min: window.innerWidth < 768
      })
    }
      window.addEventListener('resize', handleResize)
    
      return ()=> {
        window.removeEventListener('resize', handleResize)
      }
    },[])
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
  return (
      <div>
        <h1>Latest Video</h1>
          {!!videos.length &&
            videos.map(video => (
                <YouTube
                  videoId={video.id.videoId}
                  opts={{...configReprod, width:dimensions.width, height:dimensions.height, min:dimensions.min}}
                  key={video.id.videoId}
                />
              )
            )}
      </div>
    )
}

export default LatestVideo;
