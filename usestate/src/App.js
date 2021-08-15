import React, { useState } from 'react';

export default function App() {
  const [count, setCount] = useState(0)
  // const [value, setValue] = useState(initialValue)
  // if function in initialValue, put (() => function()) so it only runs once
  // if obj in initialValue, update in setValue with { ...prevValue, value: newValue }
  //   or just use 2 setState hooks to manage 2 states (or more)

  function decrementCount() {
    setCount(prevCount => prevCount - 1)
  }

  function incrementCount() {
    setCount(prevCount => prevCount + 1)
  }

  return (
    <>
      <button onClick={decrementCount}>-</button>
      <span>{count}</span>
      <button onClick={incrementCount}>+</button>
    </>
  );
}
