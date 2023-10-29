import { useState } from "react"
import reactLogo from "./assets/react.svg"
import viteLogo from "/vite.svg"
import "./App.css"

function App() {
  const [count, setCount] = useState(0)

  const addValue = () => {
    setCount(count + 1)
    if (count > 19) {
      setCount(20)
    }
  }
  const removeValue = () => {
    setCount(count - 1)
    if (count < 1) {
      setCount(0)
    }
  }

  return (
    <>
      <h1>Chat or react</h1>
      <h1>Counter value: {count}</h1>
      <button onClick={addValue}>Add</button>
      <button onClick={removeValue}>remove</button>
    </>
  )
}

export default App
