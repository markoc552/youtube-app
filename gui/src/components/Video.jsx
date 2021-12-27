import React from "react";
import { Image } from "semantic-ui-react";

const Video = ({ video, onVideoSelect }) => {
  return (
    <div onClick={() => onVideoSelect(video)} className="video-wrapper">
      <Image floated="left" src={video.snippet.thumbnails.default.url} />
      <div>
        <div className="video-title">{video.snippet.title}</div>
        <div>{video.snippet.description}</div>
        <div className="video-channel">{video.snippet.channelTitle}</div>
      </div>
    </div>
  );
};

export default Video;
