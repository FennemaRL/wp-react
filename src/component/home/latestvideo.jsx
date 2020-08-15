import React, { Component } from "react";
import axios from "axios";
import YouTube from "react-youtube";

class LatestVideo extends Component {
  state = {
    videos: [],
    videoSize: {
      height:
        window.innerWidth <= 768
          ? (window.innerHeight / 2).toString + "px"
          : "430px",
      width: window.innerWidth <= 768 ? "100%" : "60%",
      playerVars: {
        autoplay: 0
      },
      min: window.innerWidth <= 768
    }
  };

  componentDidMount() {
    if (!this.state.videos.size) {
      let kg = process.env.REACT_APP_GK;
      let bmuid = process.env.REACT_APP_bmuid;
      axios
        .get(
          `https://www.googleapis.com/youtube/v3/search?key=${kg}&channelId=${bmuid}&part=snippet,id&order=date&maxResults=1&showinfo=0&enablejsapi=1`
        )
        .then(res => {
          this.setState({ videos: res.data.items });
        })
        .catch(e => () => {});
    }
  }

  render() {
    const videos = this.state.videos;
    const config = this.state.videoSize;
    return (
      <div>
        <h1>Latest Video</h1>
          {videos.length &&
            videos.map(video => {
              return (
                <YouTube
                  videoId={video.id.videoId}
                  opts={config}
                  onReady={this._onReady}
                  key={video.id.videoId}
                />
              );
            })}
      </div>
    );
  }
}

export default LatestVideo;
