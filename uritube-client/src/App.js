<<<<<<< HEAD
import React from 'react';
import Index from './pages/Index';
import LoginFrom from './pages/LoginForm';
import './App.css';

function App() {
  return (
    <div className="App">
      <Index />
      <LoginFrom />
    </div>
  );
=======
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
>>>>>>> 1da1e15a39bd868e9acc94d41342e55f7e1b5ee8
}

export default App;
