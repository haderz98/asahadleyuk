import React from "react";

const VideoPlayer = (props) => {
  return (
    <div>
      <video controls width={"100%"} style={{ borderRadius: "8px" }}>
        <source src={props.url} type="video/mp4" />
      </video>
    </div>
  );
};

export default VideoPlayer;
