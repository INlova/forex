import React, { Component } from 'react';
import Converter from './components/Converter/Converter';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to Forex</h2>
        </div>
        <Converter />
      </div>
    );
  }
}

export default App;
