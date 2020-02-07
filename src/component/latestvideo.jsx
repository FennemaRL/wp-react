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
  handleResize = e => {
    let widthtotal = window.innerWidth;
    let heighttotal = window.innerHeight;
    let actualStatusvideo = this.state.videoSize;
    if (widthtotal <= 768 && !actualStatusvideo.min) {
      this.setState(() => {
        let newstate = {
          height: heighttotal / 3 + "px",
          width: "100%",
          playerVars: actualStatusvideo.playerVars,
          min: !actualStatusvideo.min
        };
        return { videoSize: newstate };
      });
    }
    if (widthtotal > 768 && actualStatusvideo.min) {
      this.setState(() => {
        let newstate = {
          height: "430px",
          width: "60%",
          playerVars: actualStatusvideo.playerVars,
          min: !actualStatusvideo.min
        };
        return { videoSize: newstate };
      });
    }
  };

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }

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
        .catch(e => console.error(e));
    }
    window.addEventListener("resize", this.handleResize);
  }

  render() {
    const videos = this.state.videos;
    const config = this.state.videoSize;
    return (
      <div>
        <h1>LatestVideo</h1>
        <div style={{ paddingTop: "25px" }}>
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
      </div>
    );
  }
}

export default LatestVideo;
