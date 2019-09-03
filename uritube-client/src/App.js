import React, { Component } from 'react';
import { fetchData } from './components/fetchData';
import ReactHeader from './components/ReactHeader';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    // this.eventHandler = this.eventHandler.bind(this);

    this.state = {
      videos: []
    };
  }

  componentDidMount() {
    fetchData({ max: 10, query: 'bts' }, data => {
      this.setState({ videos: data.items });
    });
  }

  // eventHandler(video) {
  //   this.setState({
  //     currentVideo: video
  //   });
  // }

  render() {
    return (
      <div>
        <ReactHeader appVideos={this.state.videos} />
      </div>
    );
  }
}

export default App;
