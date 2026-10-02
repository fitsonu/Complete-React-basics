import { useState } from 'react'
import {useEffect} from 'react'

function App() {
  const [a, setA] = useState(0)
  const [b,setB] =useState(100)
 
 
  function aChanging(){
    console.log("a is changing")
  }
  function bChanging(){
    console.log("b is changing")
  }


 
  useEffect(function(){
    aChanging() 
    // now function is called when change in a is occur
  },[a])

  useEffect(function(){
    bChanging() 
    // now function is called when change in b is occur it is not manual like function call
  },[b])



  return (
 <div>
  <h1>A is {a}</h1>
  <h1>B is {b}</h1>
  <button
  onClick={()=>{
    setA(a+1)
    //aChanging() -> this is simple function call

  }}
  >Change A</button>

  <button
  onClick={()=>{
    setB(b+1)
    //bChanging() -> this is simple function call
  }}
  >Change B</button>
  
 </div>
  )
}

export default App
