import { useState } from "react";
import { useIncrement } from "../hooks/useIncrement";

export function Increment () {
    const [count, increment] = useIncrement(0);
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increment}>Increment by 1</button>
    </div>
  );
}
