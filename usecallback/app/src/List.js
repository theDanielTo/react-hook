import React, { useEffect, useState } from 'react'

export default function List({ getItems }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(getItems(2));
    console.log('Updating Items');
  }, [getItems])
  // referential equality. ref to getItems never changes with useCallback

  return items.map(item => <div key={item}>{item}</div>);
}
