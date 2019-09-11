import React from 'react';
import { Layout } from 'antd';
import { Route, Switch } from 'react-router-dom';
import LoginContainer from '../../modules/LoginContainer';
import HeaderForm from '../Community/HeaderForm';
import SiderForm from '../Community/SiderForm';
import SignUp from '../SignUp';
import UserInfo from '../UserInfo';
import ContentForm from '../Contents/ContentForm';

const LayoutForm = ({ value, match }) => {
  return (
    <div>
      <Layout>
        <HeaderForm value={value} match={match} />
        <Layout>
          <SiderForm value={value} match={match} />
          <Switch>
            <Route exact path="/community/login" component={LoginContainer} />
            <Route exact path="/community/signup" component={SignUp} />
            <Route exact path="/community/userinfo" component={UserInfo} />
            <Route path="/community/:cate" component={ContentForm} />
          </Switch>
        </Layout>
      </Layout>
    </div>
  );
};

export default LayoutForm;
