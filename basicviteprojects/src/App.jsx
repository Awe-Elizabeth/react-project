import { useState } from 'react'

import Youtube from './Youtube'


function App() {

  const username = "Awe Elizabeth"
  return (
    <>
      <h1>{username}</h1>
      <h1>This course is going great</h1>
      <Youtube />
    </>
    
  )
}

export default App
