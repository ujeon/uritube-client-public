import React from "react";
import { Link, withRouter } from "react-router-dom";
import { Layout, Menu } from "antd";
const { Header } = Layout;

const HeaderForm = withRouter(({ match }) => {
  return (
    <Header className="header">
      {console.log("주소를 알려줘!!!!", match)}
      <div className="logo" />
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
            alignContent: "space-between",
            float: "left"
          }}
        >
          <Link to="/">Uritube</Link>
        </Menu.Item>
        <Menu.Item
          key="1"
          style={{
            display: "static",
            alignContent: "space-between"
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
          <Link to="/community/login">Login </Link>
        </Menu.Item>
      </Menu>
    </Header>
  );
});

export default HeaderForm;
