import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import { postData } from '../../../util/postData';
import { getData } from '../../../util/getData';
const { Header } = Layout;
const { SubMenu } = Menu;

const HeaderFormUser = ({ value, match }) => {
  const [items, setitem] = useState();
  if (match) {
    getData('categories/' + match.match.params.cate, items => {
      setitem(items.name);
    });
  }

  const logout = () => {
    postData({ email: window.sessionStorage.email }, 'users/signout');
    window.sessionStorage.clear();
    window.localStorage.clear();
    value.onLogout();
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
          <Link to={`/community/${match.match.params.cate}`}>
            {items ? [items] : 'title'}
          </Link>
        </Menu.Item>
        <SubMenu
          key="sub1"
          title={<span>{window.sessionStorage.name} 님의 페이지</span>}
        >
          <Menu.Item key="1">
            <Link to={`/community/userinfo/${window.sessionStorage.user_id}`}>
              My Page
            </Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link
              to={`/community/usercomments/${window.sessionStorage.user_id}`}
            >
              내가 쓴 댓 글{' '}
            </Link>
          </Menu.Item>
          <Menu.Item key="3" onClick={logout}>
            <Link to="/">로그아웃</Link>
          </Menu.Item>
          <Menu.Item key="4">
            <Link to="/community/admin">관리자 페이지</Link>
          </Menu.Item>
        </SubMenu>
      </Menu>
    </Header>
  );
};

export default HeaderFormUser;
