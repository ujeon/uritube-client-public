import React from 'react';
import { Layout, Menu } from 'antd';
import { Link, Route, Switch } from 'react-router-dom';
import HeaderFormUser from '../Community/HeaderFormUser';
import SiderFormUser from '../Community/SiderFormUser';
import UserInfo from '../UserInfo';
import ContentForm from '../Contents/ContentForm';

const LayoutFormUser = () => {
  return (
    <div>
      <Layout>
        <HeaderFormUser />
        <Layout>
          <SiderFormUser />
          <div>
            <Switch>
              <Route exact path="/community/userinfo" component={UserInfo} />
              <Route
                exact
                path="/community/:cate/:userid"
                component={ContentForm}
              />
            </Switch>
          </div>
        </Layout>
      </Layout>
    </div>
  );
};

export default LayoutFormUser;
