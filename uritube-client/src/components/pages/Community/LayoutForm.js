import React from 'react';
import { Layout } from 'antd';
import { Route, Switch } from 'react-router-dom';
import LoginForm from '../LoginForm';
import HeaderForm from '../Community/HederForm';
import SiderForm from '../Community/SiderForm';
import SignUp from '../SignUp';
import UserInfo from '../UserInfo';
import ContentForm from '../Contents/ContentForm';

const LayoutForm = () => {
  return (
    <div>
      <Layout>
        <HeaderForm />
        <Layout>
          <SiderForm />
          <Switch>
            <Route exact path="/community/login" component={LoginForm} />
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
