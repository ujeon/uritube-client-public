import React, { Component } from 'react';
import Index from './components/routes/Index';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Store from '../src/components/store/Store';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logged: window.localStorage.isLogin || false,
      onLogin: this.onLogin,
      onLogout: this.onLogout
    };
  }

  onLogin = () => {
    this.setState({
      logged: window.localStorage.isLogin
    });
  };

  onLogout = () => {
    this.setState({
      logged: window.localStorage.isLogin
    });
  };

  render() {
    return (
      <Store.Provider value={this.state}>
        <BrowserRouter>
          <Index indexProps={this.state} />
        </BrowserRouter>
      </Store.Provider>
    );
  }
}

export default App;
