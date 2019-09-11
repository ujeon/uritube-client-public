import React from 'react';
import { Layout } from 'antd';
import { Route, Switch } from 'react-router-dom';
import HeaderFormUser from '../Community/HeaderFormUser';
import SiderFormUser from '../Community/SiderFormUser';
import UserInfo from '../UserInfo';
import ContentForm from '../Contents/ContentForm';
import CommentsUser from '../Contents/CommentsUser';
import Admin from '../Admin';

const LayoutFormUser = ({ value, match }) => {
  return (
    <div>
      <Layout>
        <HeaderFormUser value={value} match={match} />
        <Layout>
          <SiderFormUser value={value} match={match} />
          <Switch>
            <Route exact path="/community/admin" component={Admin} />
            <Route exact path="/community/:cate" component={ContentForm} />
            <Route
              exact
              path="/community/userinfo/:userid"
              component={UserInfo}
            />
            <Route
              exact
              path="/community/usercomments/:userid"
              component={CommentsUser}
            />
          </Switch>
        </Layout>
      </Layout>
    </div>
  );
};

export default LayoutFormUser;
