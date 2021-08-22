import React, { useState, useEffect } from 'react';

export default function App() {
  const [resourceType, setResourceType] = useState('posts');
  // const [items, setItems] = useState([]);

  useEffect(() => {
    // fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
    //   .then(res => res.json())
    //   .then(json => setItems(json))
    console.log('resource changed')

    return () => {
      console.log('return from resource change')
    }
    // clean up return code called first
  }, [resourceType])

  return (
    <>
      <div>
        <button onClick={() => setResourceType('posts')}>Posts</button>
        <button onClick={() => setResourceType('users')}>Users</button>
        <button onClick={() => setResourceType('comments')}>Comments</button>
      </div>
      <h1>{resourceType}</h1>
      {/* {items.map(item => (
        <pre>{JSON.stringify(item)}</pre>
      ))} */}
    </>
  );




  // const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  // const handleResize = () => {
  //   setWindowWidth(window.innerWidth)
  // }

  // useEffect(() => {
  //   window.addEventListener('resize', handleResize)
  //   return () => {
  //     window.removeEventListener('resize', handleResize)
  //   }
  //   // clean up
  // }, [])
  // // setWindowWidth changes dynamically

  // return (
  //   <div>{windowWidth}</div>
  // )
}
