import React, { Component } from 'react';
import IndexList from './IndexList';

class Index extends Component {
  render() {
    return (
      <div>
        {/* 헤더가 있어야 함 */}
        {/* 나중에 맵으로 구현할 부분이라 list와 분리 함 */}
        <IndexList />
        <IndexList />
        <IndexList />
      </div>
    );
  }
}

export default Index;
