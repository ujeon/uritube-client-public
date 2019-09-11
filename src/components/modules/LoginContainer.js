import React from 'react';
import Store from '../store/Store';
// import Index from '../routes/Index';
import LoginForm from '../pages/LoginForm';
// import HeaderFormUser from '../pages/Community/HeaderFormUser';

const LoginContainer = () => (
  <Store.Consumer>
    {store => <LoginForm onLogin={store.onLogin} info={store.info} />}
  </Store.Consumer>
);
export default LoginContainer;
