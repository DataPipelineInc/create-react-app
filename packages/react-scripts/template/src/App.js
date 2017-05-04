import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './App.global.scss';
import scssModules from './App.scss';

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

        <section className="App-features">
          <h3>Added features by data pipeline</h3>
          <ul className="App-feature-list">
            <li>
              Support scss
              <span className="Feature-scss">
                (this sentence is styled by scss)
              </span>
            </li>
            <li>
              Support scss modules
              <span className={scssModules.Feature}>
                (this sentence is styled by scss modules)
              </span>
            </li>
          </ul>
        </section>
      </div>
    );
  }
}

export default App;
