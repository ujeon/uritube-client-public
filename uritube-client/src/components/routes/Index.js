import React from 'react';
import { Route } from 'react-router-dom';
import Main from '../pages/Main';
import LayoutForm from '../pages/Community/LayoutForm';

const Index = () => {
  return (
    <div>
      <Route exact path="/" component={Main} />
      <Route path="/community/" component={LayoutForm} />
    </div>
  );
};

export default Index;
