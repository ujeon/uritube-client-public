import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
const { Header } = Layout;

const HeaderForm = () => {
  return (
    <Header className="header">
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        style={{ lineHeight: '64px' }}
      >
        <Menu.Item key="0">Uritube</Menu.Item>
        <Menu.Item key="1">title</Menu.Item>
        <Menu.Item key="2">
          <Link to="/community/login">Login </Link>
        </Menu.Item>
      </Menu>
    </Header>
  );
};

export default HeaderForm;

// import React from "react";
// import { Link } from "react-router-dom";
// import { Layout, Menu } from "antd";
// const { Header } = Layout;

// const HeaderForm = props => {
//   return (
//     <Header className="header">
//       {console.log(props)}
//       <Menu
//         theme="dark"
//         mode="horizontal"
//         defaultSelectedKeys={["2"]}
//         style={{ lineHeight: "64px" }}
//       >
//         <Menu.Item
//           key="0"
//           style={{
//             display: "static",
//             alignContent: "space-between"
//           }}
//         >
//           Uritube
//         </Menu.Item>
//         <Menu.Item
//           key="1"
//           style={{
//             display: "static",
//             justifyContent: "space-between",
//             alignSelf: "center"
//           }}
//         >
//           title
//         </Menu.Item>
//         <Menu.Item
//           key="2"
//           style={{
//             display: "static",
//             alignContent: "space-between",
//             float: "right"
//           }}
//         >
//           Login
//         </Menu.Item>
//       </Menu>
//     </Header>
//   );
// };

// export default HeaderForm;
