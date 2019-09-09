import React, { Component } from "react";
import MainList from "./MainList";
import HeaderForm from "./Community/HederForm";
import { Row } from "antd";
import HeaderForm from "../pages/Community/HeaderForm";
// import HeaderFormUser from '../pages/Community/HeaderFormUser';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      title: "main"
      //title 에 따른 ContentForm 렌더가 되어야 하는데.....
    };
    // this.titleHandling = this.titleHandling.bind(this);
  }
  // onClick = { this.titleHandling };
  // 온클릭 이벤트를 어디에 걸어야 할까

  // titleHandling() {
  //   this.setState({ title: "title!!" });
  // }

  async componentDidMount() {
    const data = await (await fetch(
      "http://13.125.149.171:8080/titles"
    )).json();
    this.setState({
      data
    });
  }

  render() {
    const { data } = this.state;

    return (
      <div style={{ background: "#ECECEC", padding: "30px" }}>
        <HeaderForm title={this.state.title} />
        <Row gutter={16}>
          {data.map(data => (
            <MainList
              key={data.id}
              title={data.name}
              contentsList={data.categories.map(el => (
                <p>{el.name}</p>
              ))}
            />
          ))}
        </Row>
        {/* <Row gutter={16}>
          {data.map(data => (
            <MainList key={data.id} head={data.id} title={data.title} />
          ))}
        </Row> */}
      </div>
    );
  }
}

export default Main;
// import React, { Component } from "react";
// // import axios from "axios";
// import MainList from "./MainList";
// import { Row } from "antd";

// class Main extends Component {
//   state = {
//     data: []
//   };

//   async componentDidMount() {
//     const data = await (await fetch(
//       "http://13.125.149.171:8080/titles"
//     )).json();
//     this.setState({
//       data
//     });
//   }

//   // 카테고리 데이터 받아오기
//   // getCategories = async () => {
//   //   const data = await axios.get("http://13.125.149.171:8080/titles");
//   //   this.setState({ data });
//   // };

//   //  componentDidMount() {
//   //   this.getCategories();
//   // }

//   render() {
//     const { data } = this.state;
//     return (
//       <div style={{ background: "#ECECEC", padding: "30px" }}>
//         <Row gutter={16}>
//           {data.map(data => (
//             <MainList data={data} />
//           ))}
//         </Row>
//       </div>
//     );
//   }
// }

// export default Main;

// // import React, { Component } from 'react';
// // import MainList from './MainList';

// // class Main extends Component {

// //   render() {
// //     return (
// //       <div>
// //         {/* 헤더가 있어야 함 */}
// //         {/* 나중에 맵으로 구현할 부분이라 list와 분리 함 */}
// //         <MainList />
// //         <MainList />
// //         <MainList />
// //       </div>
// //     );
// //   }
// // }

// // export default Main;
