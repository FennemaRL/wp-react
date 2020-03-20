import React from "react";

const Music = () => {
  return (
    <div className="container">
      <h1>Music</h1>
      <div className="principal">
        <iframe
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
};

export default Music;
