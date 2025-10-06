import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 let [count, setCounter]= useState(15)

 let addval;

  if (count <= 19){
    addval = function (){
    // setCounter(prevCounter => prevCounter + 1)
    // setCounter(count +1)

     setCounter(prec => prec + 1)
     console.log(count)
  }
  
  }
   
  let remove;

  if(count >= 1){
  remove = function() {
    setCounter(removeVal => removeVal -1)
    console.log(count)
  }
  }
  return (
    <>
    <h1>chai aur react</h1>

    <h2>Counter value {count}</h2>

    <button onClick={addval}> add value {count}</button>

    <button onClick={remove}> remove value {count}</button>

    <p>footer :{count}</p>
    </>
  )
}

export default App
