<<<<<<< HEAD
import React from 'react';
import Index from './pages/Index';
import LoginFrom from './pages/LoginForm';
import './App.css';

function App() {
  return (
    <div className="App">
      <Index />
      <LoginFrom />
    </div>
  );
=======
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
>>>>>>> 1da1e15a39bd868e9acc94d41342e55f7e1b5ee8
}

export default App;
