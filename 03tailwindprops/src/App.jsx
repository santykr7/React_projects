import { useState } from "react"
import Card from "./component/card"
import "./App.css"

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    userName: "santy",
    age: 23,
  }

  return (
    <>
      <h1 className='bg-orange-600 text-black rounded-xl mb-3'>
        Here is tailwind
      </h1>
      <Card username='Ashwini' btnText='Kiss ME' />
      <Card username='Vinita' btnText='Fuck ME' />
    </>
  )
}

export default App
