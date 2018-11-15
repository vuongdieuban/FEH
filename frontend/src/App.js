import React, { Component } from 'react';
import Heroes from './components/Heroes'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Heroes />
      </div>
    );
  }
}

export default App;
