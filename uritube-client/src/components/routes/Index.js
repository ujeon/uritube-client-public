import React from 'react';
import { Route } from 'react-router-dom';
import Main from '../pages/Main';
import { ReactHeader } from '../pages/Community/ReactHeader';

const Index = () => {
  return (
    <div>
      <Route exact path="/" component={Main} />
    </div>
  );
};

export default Index;
