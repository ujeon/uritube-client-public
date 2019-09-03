import React from 'react';
import YoutubeList from './YoutubeList';

const Youtube = props => {
  return (
    <div>
      <YoutubeList videos={props.videos} />
    </div>
  );
};

export default Youtube;
