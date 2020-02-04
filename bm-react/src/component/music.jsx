import React, { Component } from "react";

class Music extends Component {
  constructor(props) {
    super(props);
    this.spotyref = React.createRef();
  }
  componentDidMount() {}
  render() {
    return (
      <div className="container">
        <h1>Biography</h1>
        <div className="principal">
          <iframe
            ref={this.spotyref}
            title="Spotify"
            src={`https://embed.spotify.com/?uri=spotify:playlist:7pJAMIdQAyyflTGKdByY4s&view=list&theme=black`}
            width={"100%"}
            height={"650"}
            frameBorder="0"
            allowtransparency="true"
          />
        </div>
      </div>
    );
  }
}

export default Music;
