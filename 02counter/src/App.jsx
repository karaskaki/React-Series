import { useState } from 'react';
import './App.css'

function App() {
  
const [counter, setCounter] = useState(0)

function addvalue() {
  setCounter((prev) => prev + 1)
  setCounter((prev) => prev + 1)
  setCounter((prev) => prev + 1)
  setCounter((prev) => prev + 1)
}

function removeValue() {
  setCounter(counter - 1)
}

  return (
    <>  
      <h1>First project - counter</h1>
      <h2>Counter value: {counter}</h2>
      <button 
        onClick={addvalue}
      >Add Value</button>{" "}
      <button
        onClick={removeValue}
      >Remove Value</button>
      <p>footer: </p>
    </>
  )
}

export default App;
