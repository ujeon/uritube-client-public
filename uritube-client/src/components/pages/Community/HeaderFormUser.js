import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import { postData } from '../../../util/postData';
const { Header } = Layout;
const { SubMenu } = Menu;

const HeaderFormUser = () => {
  const userId = 10;
  const userName = 'Ring';
  const logout = () => {
    postData({ email: window.sessionStorage.email });
    window.sessionStorage.clear();
    window.localStorage.isLogin = 'false';
  };

  return (
    <Header className="header">
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        style={{ lineHeight: '64px' }}
      >
        <Menu.Item key="0">
          <Link to="/">Uritube</Link>
        </Menu.Item>
        <Menu.Item key="1">
          <Link to="/community/1/1">Title</Link>
        </Menu.Item>
        <SubMenu key="sub1" title={<span>{userName}</span>}>
          <Menu.Item key="1">
            <Link to={`/community/userinfo/${userId}`}>My Page</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to={`/community/usercomments/${userId}`}>내가 쓴 댓 글 </Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Link to="/">
              <p onClick={logout()}>로그아웃</p>
            </Link>
          </Menu.Item>
        </SubMenu>
      </Menu>
    </Header>
  );
};

export default HeaderFormUser;
