import React, {Component} from 'react';
import "./YoutubeList.css"
import ReactPlayer from 'react-player'
import YoutubeVideo from "./YoutubeVideo"
import { Menu, Dropdown, Icon } from "antd";

export default class YoutubeList extends Component {
  constructor(props){
    super(props)
    this.state = {
      display : "display-none",
      videoId : ""
    }
  }

  handleClick=((val)=>{
    this.setState({videoId: val})
    if(this.state.display === "display-none"){
      this.setState({display : "display-on"})
    } else {
      this.setState({display: "display-none"})
    }
  })
  
  render() {
    return (
      <div className="videoBox">
        <span className="imgBox">
          <img className="youtubeImg" src={this.props.video} alt={this.props.title} onClick={()=>{this.handleClick(this.props.videoId)}}></img>
        </span>
      <div></div>
        <span className="titleBox">
          <span className="title">{this.props.title}</span>
        </span>
        <div className="box">
      <div className= {this.state.display} >
        <ReactPlayer
          url={"https:www.youtube.com/embed/"+ this.props.videoId}
          play 
          controls
          width="720px"
          // height="525px"
        />
      </div>
      </div>
    </div> 
    )
  }
}

