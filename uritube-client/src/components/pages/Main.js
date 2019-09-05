import React, { Component } from 'react';
import MainList from './MainList';

class Main extends Component {
  render() {
    return (
      <div>
        {/* 헤더가 있어야 함 */}
        {/* 나중에 맵으로 구현할 부분이라 list와 분리 함 */}
        <MainList />
        <MainList />
        <MainList />
      </div>
    );
  }
}

export default Main;
