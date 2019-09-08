import React from 'react';
import { Route } from 'react-router-dom';
import Main from '../pages/Main';
import LayoutForm from '../pages/Community/LayoutForm';
import LayoutFormUser from '../pages/Community/LayoutFormUser';

const Index = () => {
  const signin = false;
  return (
    <div style={{ textAlign: 'center' }}>
      <Route exact path="/" component={Main} />
      {!signin ? (
        <Route path="/community/" component={LayoutForm} />
      ) : (
        <Route path="/community/" component={LayoutFormUser} />
      )}
    </div>
  );
};

export default Index;
