import { useEffect, useState,useRef } from 'react'
import { useCallback } from 'react'

import './App.css'

function App() {
  
  const [length, setLength] = useState(8)
  const [addNumber, setaddNumber] = useState(false)
  const [addChar, setaddChar] = useState(false)
  const [password, setPassword] = useState("")

  const passwordRef = useRef(null)


  const copyPassword = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,5);
    window.navigator.clipboard.writeText(password)

  },[password])

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (addNumber) str += "0123456789"
    if (addChar) str += "!@#$%^&*-_+=[]{}~`"

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random()*str.length + 1)

      pass += str.charAt(char)
      
    }
    setPassword(pass)
  },[length,addNumber,addChar,setPassword])


  useEffect(() => {
    passwordGenerator()
  },[length,addNumber,addChar,passwordGenerator])




  return (
    <>
     <div className="w-full max-w-md mx-auto shadow-lg rounded-xl px-5 py-4 my-8 bg-gray-900 text-orange-400">
  <h1 className="text-white text-center text-xl font-semibold mb-4">
    Password Generator
  </h1>

  <div className="flex shadow rounded-lg overflow-hidden mb-4">
    <input 
      type="text"
      value={password}
      className="w-full py-2 px-4 rounded-lg 
                 bg-gray-700 text-white placeholder-gray-400
                 border border-gray-600 shadow-sm 
                 focus:outline-none focus:ring-2 focus:ring-orange-400 
                 transition"
      placeholder="Password"
      ref={passwordRef}
      readOnly
    />
     <button 
    className="px-4 py-2 rounded-lg 
               bg-orange-500 text-white font-medium 
               hover:bg-orange-600 active:bg-orange-700 
               shadow-md transition"
               onClick={copyPassword}
               
  >
    Copy
  </button>
  </div>

  <div className='flex text-sm gap-x-2'>
    <div className='flex items-center gap-x-1'>
      <input type="range"
        min={6}
        max={100}
        value={length}
        className=""
        onChange={(e) => setLength(e.target.value)}
      />
      <label > Lenght : {length} </label>
    </div>

    <div className="flex items-center gap-x-1">
      <input type="checkbox" 
      defaultChecked = {addNumber}
      id = "numberInput"
      onChange={() =>{
        setaddNumber((prev) => !prev)
      }}
      />
      <label htmlFor="numberInput">Numbers</label>
    </div>
    <div className="flex items-center gap-x-1">
      <input type="checkbox" 
      defaultChecked = {addChar}
      id = "CharInput"
      onChange={() =>{
        setaddChar((prev) => !prev)
      }}
      />
      <label htmlFor="CharInput">Characters</label>
    </div>

  </div>
</div>

    </>
  )
}

export default App
