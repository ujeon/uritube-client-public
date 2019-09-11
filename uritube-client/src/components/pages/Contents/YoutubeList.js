import React from 'react';
import './YoutubeList.css';
import ReactPlayer from 'react-player';

const YoutubeList = props => {
  // let videoClick = ((val)=>{
  //   {console.log(val)}
  //   <iframe className="embed-responsive-item"
  //     src={"https://www.youtube.com/embed/"+ props.videoId}
  //     allowFullScreen>
  //   </iframe>
  // })

  return (
    <div className="videoBox">
      <span className="imgBox">
        <img className="youtubeImg" src={props.video} alt={props.title}></img>
      </span>
      <div></div>
      <span className="titleBox">
        <span className="title">{props.title}</span>
      </span>
      <ReactPlayer />
    </div>
  );
};

export default YoutubeList;
