import React from 'react';
import YoutubeList from './YoutubeList';

const Youtube = props => {
  return (
    <div>
      {/* {console.log('videos console', props)} */}
      {/* {props.videos.map(video => (
        <YoutubeList
          key={video.id.videoId}
          video={video.snippet.thumbnails.default.url}
          title={video.snippet.title}
          description={video.snippet.description}
        />
      ))} */}
      <YoutubeList />
    </div>
  );
};

export default Youtube;
