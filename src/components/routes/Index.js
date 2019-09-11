import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Main from '../pages/Main';
import LayoutForm from '../pages/Community/LayoutForm';
import LayoutFormUser from '../pages/Community/LayoutFormUser';

class Index extends Component {
  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <Route
          exact
          path="/"
          render={props => <Main value={this.props.indexProps} match={props} />}
        />
        {this.props.indexProps.logged ? (
          <Route
            path="/community/:cate"
            render={props => (
              <LayoutFormUser value={this.props.indexProps} match={props} />
            )}
          />
        ) : (
          <Route
            path="/community/:cate"
            render={props => (
              <LayoutForm value={this.props.indexProps} match={props} />
            )}
          />
        )}
      </div>
    );
  }
}

export default Index;
