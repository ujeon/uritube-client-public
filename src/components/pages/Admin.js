import React, { Component } from 'react';
import UserList from './Contents/UserList';
import TitleList from './Contents/TitleList';
import CategoryList from './Contents/CategoryList';
import { Row, Col } from 'antd';

class Admin extends Component {
  render() {
    return (
      <div>
        <Row type="flex" justify="center" align="top">
          <UserList />
          <TitleList />
          <CategoryList />
        </Row>
      </div>
    );
  }
}

export default Admin;
