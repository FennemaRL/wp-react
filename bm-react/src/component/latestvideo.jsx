import React, { Component } from "react";
import axios from "axios";
import YouTube from "react-youtube";

class LatestVideo extends Component {
  state = {
    videos: []
  };
  componentDidMount() {
    let kg = process.env.REACT_APP_GK;
    let bmuid = process.env.REACT_APP_bmuid;
    axios
      .get(
        `https://www.googleapis.com/youtube/v3/search?key=${kg}&channelId=${bmuid}&part=snippet,id&order=date&maxResults=1`
      )
      .then(res => {
        this.setState({ videos: res.data.items });
      })
      .catch(e => console.error(e));
  }

  render() {
    const { videos } = this.state;
    return (
      <div>
        <h1>LatestVideo</h1>
        <div style={{ paddingTop: "25px" }}>
          {videos.length &&
            videos.map(video => {
              return (
                <YouTube
                  videoId={video.id.videoId}
                  opts={{
                    height: "450px",
                    width: "65%",
                    playerVars: {
                      autoplay: 0
                    }
                  }}
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
