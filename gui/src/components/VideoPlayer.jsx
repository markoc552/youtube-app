import React from "react";

const VideoPlayer = ({ video }) => {
  return !video ? (
    <div>Loading ....</div>
  ) : (
    <div className="video-player">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe
          src={`https://www.youtube.com/embed/${video.id.videoId}`}
        ></iframe>
      </div>
      <div className="video-info">
        <div className="snippet-title">{video.snippet.title}</div>
        <div>{video.snippet.description}</div>
      </div>
    </div>
  );
};

export default VideoPlayer;
