import React, { useState, useCallback } from 'react'
import List from './List.js'

export default function App() {
  const [number, setNumber] = useState(1);
  const [dark, setDark] = useState(false)

  const getItems = useCallback(incrementer => {
    return [number + incrementer, number + 1 + incrementer, number + 2 + incrementer]
  }, [number])
  // renders only when number changes (similar to useMemo)
  // remember: useMemo returns the return value of the cb fn
  // useCallback returns the entire fn instead

  const theme = {
    backgroundColor: dark ? '#333' : '#FFF',
    color: dark ? '#FFF' : '#333'
  }

  return (
    <div style={theme}>
      <input
        type="number"
        value={number}
        onChange={e => setNumber(parseInt(e.target.value))}
      />
      <button onClick={() => setDark(prevDark => !prevDark)}>
        Toggle Theme
      </button>
      <List getItems={getItems} />
    </div>
  );
}
