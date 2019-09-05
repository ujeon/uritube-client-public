import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import { Layout, Menu } from 'antd';
const { Header } = Layout;
const { SubMenu } = Menu;

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
        <SubMenu key="sub1" title={<span>subnav 1</span>}>
          <Menu.Item key="1">option1</Menu.Item>
          <Menu.Item key="2">option2</Menu.Item>
          <Menu.Item key="3">option3</Menu.Item>
          <Menu.Item key="4">option4</Menu.Item>
        </SubMenu>
      </Menu>
    </Header>
  );
};

export default HeaderForm;
