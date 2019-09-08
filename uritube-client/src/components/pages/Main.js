import React, { Component } from 'react';
// import axios from "axios";
import MainList from './MainList';
import { Row } from 'antd';
import HeaderForm from '../pages/Community/HederForm';
import HeaderFormUser from '../pages/Community/HeaderFormUser';

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

  // 카테고리 데이터 받아오기
  // getCategories = async () => {
  //   const data = await axios.get("http://13.125.149.171:8080/titles");
  //   this.setState({ data });
  // };

  //  componentDidMount() {
  //   this.getCategories();
  // }

  render() {
    const { data } = this.state;
    return (
      <div>
        <HeaderForm />
        <div style={{ background: '#ECECEC', padding: '30px' }}>
          <Row gutter={16}>
            {data.map(data => (
              <MainList data={data} />
            ))}
          </Row>
        </div>
      </div>
    );
  }
}

export default Main;

// import React, { Component } from 'react';
// import MainList from './MainList';

// class Main extends Component {

//   render() {
//     return (
//       <div>
//         {/* 헤더가 있어야 함 */}
//         {/* 나중에 맵으로 구현할 부분이라 list와 분리 함 */}
//         <MainList />
//         <MainList />
//         <MainList />
//       </div>
//     );
//   }
// }

// export default Main;
