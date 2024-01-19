import { useState } from 'react'

import './App.css'

function App() {

  const [count, setCount] = useState(15)
  //let count = 15;
  const addCount = () => {
    /**
     * setCount(count + 1)
     */
    setCount((prevCount) => prevCount + 1)
    setCount((prevCount) => prevCount + 1)
    setCount((prevCount) => prevCount + 1)
    setCount((prevCount) => prevCount + 1) 
  }

  const subtractCount = () => {
    setCount(count - 1)
  }

  return (
    <>
    <h1>React Course with Hitesh</h1>
    <h2>Counter value: {count} </h2>
    <button onClick={addCount}>Add Value</button>{" "}
    <button onClick={subtractCount}>Remove Value</button>
    <p>footer: </p>
    </>
  )
}

export default App
