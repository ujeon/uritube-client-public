import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import { getData } from '../../../util/getData';
const { Header } = Layout;

const HeaderForm = ({ match }) => {
  const [items, setitem] = useState();
  if (match) {
    getData('categories/' + match.match.params.cate, items => {
      setitem(items.name);
    });
  }

  return (
    <Header className="header">
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        style={{ lineHeight: '64px' }}
      >
        <Menu.Item
          key="0"
          style={{
            display: 'static',
            alignContent: 'space-between',
            float: 'left'
          }}
        >
          <Link to="/">Uritube</Link>
        </Menu.Item>
        <Menu.Item
          key="1"
          style={{
            display: 'static',
            alignContent: 'space-between'
          }}
        >
          {items ? [items] : 'title'}
        </Menu.Item>
        <Menu.Item
          key="2"
          style={{
            display: 'static',
            alignContent: 'space-between',
            float: 'right'
          }}
        >
          <Link to="/community/login">Login</Link>
        </Menu.Item>
      </Menu>
    </Header>
  );
};

export default HeaderForm;
