import React, { Component } from 'react';
import Converter from './components/Converter/Converter';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <h2>Welcome to Forex</h2>
        <Converter />
      </div>
    );
  }
}

export default App;
