import { useState } from "react"
import "./App.css"

function App() {
  const [color, setColor] = useState("Olive")

  return (
    <>
      <div
        className='w-full h-screen duration-200'
        style={{ backgroundColor: color }}
      >
        <div className='fixed flex flex-wrap justify-center bottom-11 inset-x-2'>
          <div className='flex flex-wrap justify-center gap-3 shadow-xl rounded-xl bg-zinc-100 px-2 py-2'>
            <button
              onClick={() => setColor("Green")}
              className='outline-none px-2 bg-green-700 rounded-xl'
            >
              GREEN
            </button>
            <button
              onClick={() => setColor("red")}
              className='outline-none px-2 bg-red-700 rounded-xl'
            >
              Red
            </button>
            <button
              onClick={() => setColor("blue")}
              className='outline-none px-2 bg-blue-700 rounded-xl'
            >
              Blue
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
