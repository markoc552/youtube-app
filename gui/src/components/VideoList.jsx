import React from "react";
import Video from "./Video";

const VideoList = ({ videos, onVideoSelect }) => {
  return (
    <div className="video-list">
      {videos.map((video) => {
        return (
          <Video key={video.etag} video={video} onVideoSelect={onVideoSelect} />
        );
      })}
    </div>
  );
};

export default VideoList;
