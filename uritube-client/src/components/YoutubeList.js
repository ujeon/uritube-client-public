import React from 'react';

const YoutubeList = ({ videos }) => {
  return (
    <div>
      <div>
        {videos.map((video, idx) => (
          <li key={idx}>{video.snippet.title}</li>
        ))}
      </div>
    </div>
  );
};

export default YoutubeList;
