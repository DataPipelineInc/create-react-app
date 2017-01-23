import React from 'react'
// You can absolutely import from `src` by default.
// If you want to define another module resolve path,
// use process.env.NODE_PATH
import logo from 'logo.svg'
import './App.global.css'
import './App.global.scss'
import cssModules from './App.css'
import scssModules from './App.scss'

function App() {
  if (__DEV__) {
    // eslint-disable-next-line no-console
    console.log('You are in dev env')
  }

  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Welcome to React</h2>
      </div>
      <p className="App-intro">
        To get started, edit <code>src/App.js</code> and save to reload.
      </p>

      <section className="Features">
        <h3>Added features by data pipeline</h3>
        <ul>
          <li>
            Support css modules
            <span className={cssModules.feature}> (this sentence is styled by css moudles)</span>
          </li>
          <li>
            Support scss
            <span className="Feature-scss"> (this sentence is styled by scss)</span>
          </li>
          <li>
            Support scss modules
            <span className={scssModules.feature}> (this sentence is styled by scss modules)</span>
          </li>
          <li>Support <b>stage-0</b> and <b>decorators</b></li>
          <li>Support absolutely importing from `./src`</li>
          <li>Support `__DEV__`</li>
          <li>Support stylelint</li>
        </ul>
      </section>
    </div>
  )
}

export default App
