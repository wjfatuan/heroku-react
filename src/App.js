import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="/">App</a>
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <Link to="/page1" className="nav-link">Page 1</Link>
            </li>
            <li class="nav-item">
              <Link className="nav-link" to="/page2">Page 2</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/page1">
            <div>Page1</div>
          </Route>
          <Route path="/page2">
          <div>Page2</div>
          </Route>
          <Route path="/">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <p>
                Edit <code>src/App.js</code> and save to reload.
              </p>
              <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn React
              </a>
            </header>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
