import React from 'react';

const YoutubeList = props => {
  return (
    <div>
      <div>
        <img className="youtubeImg" src={props.video} alt={props.title}></img>
      </div>
      <div>{props.title}</div>
      <div>{props.description}</div>
    </div>
  );
};

export default YoutubeList;
