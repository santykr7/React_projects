import { useState, useCallback, useEffect, useRef } from "react"

import "./App.css"

function App() {
  const [length, setLength] = useState(8)
  const [numberAllow, setNumberAllow] = useState(false)
  const [charallow, setCharallow] = useState(false)
  const [password, setPassword] = useState("")

  //ref hook
  const passwordRef = useRef(null)

  // useCallback for the optimization
  const passGen = useCallback(() => {
    let pass = ""
    let stri = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numberAllow) stri += "1234567890"
    if (charallow) stri += "!@#$%^&*()"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * stri.length + 1)
      pass += stri.charAt(char)
    }

    setPassword(pass)
  }, [length, numberAllow, charallow, setPassword])

  //copy the text to clipboard
  const copyPassword = useCallback(() => {
    //For show select effect of current ref
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {
    passGen()
  }, [length, numberAllow, charallow, passGen])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-xl px-4 my-5 text-orange-500 bg-gray-600'>
        <h1 className='text-white text-center my-3'>Password Generator</h1>
        <div className='flex-shadow rounded-lg overflow-hidden mb-4 '>
          <input
            type='text'
            value={password}
            className='outline-none w-full py-1 px-3'
            placeholder='Password'
            readOnly
            ref={passwordRef}
          />
        </div>
        <button
          onClick={copyPassword}
          className='outline-none rounded-lg bg-orange-600 text-white px-3 py-1 shrink-0'
        >
          Copy
        </button>
        <div className='flex text-sm gap-x-2 py-5'>
          <div className='flex items-center gap-x-1'>
            <input
              type='range'
              min={6}
              max={50}
              value={length}
              className='cursor-pointer'
              onChange={(e) => {
                setLength(e.target.value)
              }}
            />
            <label htmlFor=''>Length:{length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input
              type='checkbox'
              defaultChecked={numberAllow}
              id='numberInput'
              onChange={() => {
                setNumberAllow((prev) => !prev)
              }}
            />
            <label htmlFor='numberInput'>Numbers</label>
          </div>
          <div className='flex items-center gap-x-2'>
            <input
              type='checkbox'
              defaultChecked={charallow}
              id='numberInput'
              onChange={() => {
                setCharallow((prev) => !prev)
              }}
            />
            <label htmlFor='charInput'>Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
