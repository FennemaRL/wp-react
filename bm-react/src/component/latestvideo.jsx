import React, { Component } from "react";
import axios from "axios";
import YouTube from "react-youtube";
import k from "../component/k.env";
class LatestVideo extends Component {
  state = {
    videos: []
  };
  componentDidMount() {
    axios
      .get(
        `https://www.googleapis.com/youtube/v3/search?key=${k.gk}&channelId=${k.bmuid}&part=snippet,id&order=date&maxResults=1`
      )
      .then(res => {
        this.setState({ videos: res.data.items });
        console.log(this);
      })
      .catch(e => {
        console.error({ status: "malo", res: e });
      });
  }

  render() {
    const { videos } = this.state;
    return (
      <div>
        <h1>LatestVideo</h1>
        <div style={{ paddingTop: "30px", paddingBottom: "30px" }}>
          {videos.length &&
            videos.map(video => {
              return (
                <YouTube
                  videoId={video.id.videoId}
                  opts={{
                    height: "390",
                    width: "640",
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
