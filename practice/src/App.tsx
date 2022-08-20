import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Label } from './components/Label';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React hooks
        </a>
        <Label text="Some text goes here" />
      </header>
    </div>
  );
}

export default App;
