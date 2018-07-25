import React, { Component } from 'react';
import logo from './logo.svg';
import './css/App.css';
import 'CheckboxWithLabel' from './CheckboxWithLabel';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
          <CheckboxWithLabel labelOn="Li Louvri" labelOff="Li femen"/>
        </div>
      </div>
    );
  }
}

export default App;
