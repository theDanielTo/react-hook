import React, { useState, useMemo, useEffect } from 'react';

export default function App() {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);


  const doubleNumber = useMemo(() => {
    return slowFunction(number)
  }, [number]);
  // useMemo saves (memoize) number argument,
  // so on re-renders, it won't be ran again on similar [number]


  const themeStyles = useMemo(() => {
    return {
      backgroundColor: dark ? 'black' : 'white',
      color: dark ? 'white' : 'black'
    };
  }, [dark]);
    useEffect(() => {
    console.log('Theme Changed')
  }, [themeStyles])
  // objects in JS have a specific reference (address) when created
  // useMemo will memoize that reference.
  // useEffect re-renders will ignore memoized objects


  return (
    <>
      <input type="number" value={number} onChange={e => setNumber(parseInt(e.target.value))} />
      <button onClick={() => setDark(prevDark => !prevDark)}>Change Theme</button>
      <div style={themeStyles}>{doubleNumber}</div>
    </>
  );
}

function slowFunction(num) {
  console.log('Calling Slow Function');
  for (let i = 0; i <= 1000000000; i++) {}
  return num * 2;
}
