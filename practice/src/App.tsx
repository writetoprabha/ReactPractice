import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Label } from './components/Label';
import { useIncrement } from './hooks/useIncrement';
import { Increment } from './components/Increment';

function App() {
  const [count, increment] = useIncrement(0);

  const [name, setName] = useState('');

  useEffect(() => {
    const handle = setInterval(increment, 1000);
    return (() => {
      clearInterval(handle);
    })
  }, []);
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
        <Label text="Click on the button below to increase the value by 1" />
        <Increment />
        This number increases automatically: {count}

        <p>Enter some value: </p>
        <input type="text" onChange={e => setName(e.target.value)}></input>

        <p>Value entered is {name}</p>

      </header>
    </div>
  );
}

export default App;
