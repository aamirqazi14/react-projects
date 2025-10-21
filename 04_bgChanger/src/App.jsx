import { useState } from 'react'
import './App.css'

function App() {
  const [color,setColor] =  useState("orange")

  return (
    <>
<div className="min-h-screen bg-gray-200 flex flex-col items-center justify-center" style={{backgroundColor:color}}>
  
  <h1 className="text-3xl font-bold mb-6">Background color</h1>

  <div className="bg-gray-800 p-4 rounded-lg shadow-lg flex space-x-4">
    <button onClick={() => setColor("red")} className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded" >Red</button>
    <button onClick={() => setColor("green")} className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded" >Green</button>
    <button onClick={() => setColor("brown")} className="bg-yellow-800 hover:bg-yellow-900 text-white px-4 py-2 rounded"  >Brown</button>
    <button onClick={() => setColor("pink")} className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded"  >Pink</button>
    <button onClick={() => setColor("blue")} className="bg-blue-400 hover:bg-blue-500 text-white px-4 py-2 rounded" >Blue</button>
  </div>
</div>
    </>
  )
}

export default App
