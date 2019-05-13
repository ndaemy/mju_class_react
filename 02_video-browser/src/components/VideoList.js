import React from 'react';
import VideoListItem from './VideoListItem';

const VideoList = ({ videos, onSelectVideo }) => {
  const videoItems = videos.map(video => {
    return <VideoListItem video={video} onSelectVideo={onSelectVideo} />;
  });
  return <ul className="col col-md-4 video-list">{videoItems}</ul>;
};

export default VideoList;
