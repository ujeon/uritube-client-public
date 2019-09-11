import React, { Component } from 'react';
import YoutubeList from './YoutubeList';
import { fetchData } from '../../../util/fetchData';
import { getData } from '../../../util/getData';
// import ReactPlayer from 'react-player';

class Youtube extends Component {
  state = {
    cateId: this.props.cateId,
    datas: [],
    itemName: ''
  };

  async componentDidUpdate(prevProp) {
    if (this.props.cateId !== prevProp.cateId) {
      await getData('categories/' + this.props.cateId, item => {
        this.setState({ itemName: item.name });
      });
      await fetchData(this.state.itemName, datas => {
        this.setState({
          datas
        });
      });
    }
  }

  async componentDidMount() {
    await getData('categories/' + this.state.cateId, item => {
      this.setState({ itemName: item.name });
    });
    await fetchData(this.state.itemName, datas => {
      this.setState({
        datas
      });
    });
  }

  render() {
    const { datas } = this.state;
    return (
      <div style={{ overflow: 'auto' }}>
        {datas.length === 0 ? (
          <div>Loading</div>
        ) : (
          <div>
            {datas.items.map(video => (
              <YoutubeList
                key={video.id.videoId}
                video={video.snippet.thumbnails.high.url}
                title={video.snippet.title}
                videoId={video.id.videoId}
              />
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default Youtube;
