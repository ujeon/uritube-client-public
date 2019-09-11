import React, { Component } from 'react';
import './YoutubeList.css';
import YoutubeVideo from './YoutubeVideo';
import { Menu, Dropdown, Icon } from 'antd';

export default class YoutubeList extends Component {
  constructor(props) {
    super(props);
  }

  menu = (
    <Menu>
      <Menu.Item key="0">
        <YoutubeVideo videoId={this.props.videoId} />
      </Menu.Item>
    </Menu>
  );

  render() {
    return (
      <div className="videoBox">
        <span className="imgBox">
          <img
            className="youtubeImg"
            src={this.props.video}
            alt={this.props.title}
          ></img>
          <Dropdown overlay={this.menu} trigger={['click']}>
            <Icon
              type="down"
              className="video"
              src={this.props.video}
              alt={this.props.title}
            />
          </Dropdown>
        </span>
        <div></div>
        <span className="titleBox">
          <span className="title">{this.props.title}</span>
        </span>
        <div></div>
      </div>
    );
  }
}
// import React from 'react';
// import './YoutubeList.css';
// import ReactPlayer from 'react-player';

// const YoutubeList = props => {
//   // let videoClick = ((val)=>{
//   //   {console.log(val)}
//   //   <iframe className="embed-responsive-item"
//   //     src={"https://www.youtube.com/embed/"+ props.videoId}
//   //     allowFullScreen>
//   //   </iframe>
//   // })

//   return (
//     <div className="videoBox">
//       <span className="imgBox">
//         <img className="youtubeImg" src={props.video} alt={props.title}></img>
//       </span>
//       <div></div>
//       <span className="titleBox">
//         <span className="title">{props.title}</span>
//       </span>
//       <ReactPlayer />
//     </div>
//   );
// };

// export default YoutubeList;
