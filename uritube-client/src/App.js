import React, { Component } from 'react';
import Index from './components/routes/Index';
import { BrowserRouter } from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Index />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
