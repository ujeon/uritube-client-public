import React, { Component } from 'react';
import MainList from './MainList';
import { Row } from 'antd';
import HeaderForm from '../pages/Community/HeaderForm';
// import HeaderFormUser from '../pages/Community/HeaderFormUser';

class Main extends Component {
  state = {
    data: []
  };

  async componentDidMount() {
    const data = await (await fetch(
      'http://13.125.149.171:8080/titles'
    )).json();
    this.setState({
      data
    });
  }

  render() {
    const { data } = this.state;
    return (
      <div style={{ background: '#ECECEC', padding: '30px' }}>
        <HeaderForm title={this.state.title} />
        <Row gutter={16}>
          {data.map(data => (
            <MainList key={data.id} data={data} />
          ))}
        </Row>
      </div>
    );
  }
}

export default Main;
