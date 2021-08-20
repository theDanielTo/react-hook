import React, { useState, useEffect, useRef } from 'react';

export default function App() {
  const [name, setName] = useState('');


  // const renderCount = useRef(1);
  // returns { current: 1 }
  // useRef kind of similar to useState,
  // but saves the address so it stays the same through renders

  // useEffect(() => {
  //   renderCount.current = renderCount.current + 1;
  // })


  const inputRef = useRef();
  function focus() {
    // console.log(inputRef.current) // logs the element (<input value>)
    inputRef.current.focus();
  }
  // ref attribute on input references inputRef (function)

  const prevName = useRef('');
  useEffect(() => {
    prevName.current = name;
  }, [name]);
  // useRef used to save previous this.state
  // persists values through renders


  return (
    <>
      <input ref={inputRef} value={name} onChange={e => setName(e.target.value)}/>
      <div>My name is {name} and it used to be {prevName.current}</div>
      {/* <div>I rendered {renderCount.current} times</div> */}
      {/* <button onClick={focus}>Focus</button> */}
    </>
  );
}
