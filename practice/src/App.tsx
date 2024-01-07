import React, { useEffect, useMemo, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Label } from './components/Label';
import { useIncrement } from './hooks/useIncrement';
import { Increment } from './components/Increment';
import Child from './components/Child';

function App() {
  const [count, increment] = useIncrement(0);
  const [i, setI] = useState(0);

  const [name, setName] = useState('');

  useEffect(() => {
    const handle = setInterval(increment, 1000);
    return (() => {
      clearInterval(handle);
    })
  }, []);

  function onClickHandle () : any {
    setI(i+1);
  }

  //to avoid rendering the Child component, we can use the useMemo 
  const memoChild = useMemo(() => {
    return (<Child></Child>)
  }, [i])

  return (
    <div className="App">
      <header className="App-header">
        <Label text="Click on the button below to increase the value by 1" />
        <Increment />
        This number increases automatically: {count}

        <p>Enter some value: </p>
        <input type="text" onChange={e => setName(e.target.value)}></input>

        <p>Value entered is {name}</p>

        <h1>useMemo hook</h1>
        <h2> Click the button below for increment </h2>
        <button onClick={() => onClickHandle()}>Increment by 1 </button>
        <h2> Value of I: {i} </h2>
        <h2> The below is the child component </h2>
        <Child/>
        <h2>Memo render: </h2>
        {memoChild}
      </header>
    </div>
  );
}

export default App;
