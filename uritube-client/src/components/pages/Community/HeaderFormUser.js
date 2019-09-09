import React from "react";
import { Layout, Menu } from "antd";
const { Header } = Layout;

const HeaderFormUser = () => {
  return (
    <Header className="header">
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
          Logout
        </Menu.Item>
      </Menu>
    </Header>
  );
};

export default HeaderFormUser;

/* <Header className="header">
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["2"]}
        style={{ lineHeight: "64px" }}
      >
        <Menu.Item key="0">Uritube</Menu.Item>
        <Menu.Item key="1">title</Menu.Item>
        <SubMenu key="sub1" title={<span>이은지 님</span>}>
          <Menu.Item key="1">
            <Link to="/">My Page</Link>
          </Menu.Item>
          <Menu.Item key="2">내가 쓴 댓 글</Menu.Item>
          <Menu.Item key="3">
            signup을 false 로 구현 해야함 
            <Link to="/">로그아웃</Link>
          </Menu.Item>
        </SubMenu>
      </Menu>
    </Header> */
