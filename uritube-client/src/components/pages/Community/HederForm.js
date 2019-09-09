import React from "react";
// import { Link, Route, Switch } from 'react-router-dom';
import { Layout, Menu } from "antd";
const { Header } = Layout;

const HeaderForm = props => {
  return (
    <Header className="header">
      {console.log(props)}
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["2"]}
        style={{ lineHeight: "64px" }}
      >
        <Menu.Item
          key="0"
          style={{
            display: "static",
            alignContent: "space-between"
          }}
        >
          Uritube
        </Menu.Item>
        <Menu.Item
          key="1"
          style={{
            display: "static",
            justifyContent: "space-between",
            alignSelf: "center"
          }}
        >
          title
        </Menu.Item>
        <Menu.Item
          key="2"
          style={{
            display: "static",
            alignContent: "space-between",
            float: "right"
          }}
        >
          Login
        </Menu.Item>
      </Menu>
    </Header>
  );
};

export default HeaderForm;
