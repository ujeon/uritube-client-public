import React from 'react';
import { Layout } from 'antd';
import { Route, Switch } from 'react-router-dom';
import HeaderFormUser from '../Community/HeaderFormUser';
import SiderFormUser from '../Community/SiderFormUser';
import UserInfo from '../UserInfo';
import ContentForm from '../Contents/ContentForm';
import CommentsUser from '../Contents/CommentsUser';

const LayoutFormUser = () => {
  return (
    <div>
      <Layout>
        <HeaderFormUser />
        <Layout>
          <SiderFormUser />
          <div>
            <Switch>
              <Route path="/community/userinfo/:userid" component={UserInfo} />
              <Route
                exact
                path="/community/usercomments/:userid"
                component={CommentsUser}
              />
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
