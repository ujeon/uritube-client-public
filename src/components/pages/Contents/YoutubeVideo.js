import React from 'react';
import ReactPlayer from 'react-player';

export default function YoutubeVideo(props) {
  console.log(props);
  return (
    <div>
      <ReactPlayer
        url={'https:www.youtube.com/embed/' + props.videoId}
        playing
        controls
        width="1024px"
        height="640px"
      />
    </div>
  );
}
