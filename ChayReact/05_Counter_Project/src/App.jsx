import { useState } from 'react'

import './App.css'

function App() {
  
//  let counter = 15
 let [counter,setCounter] = useState(15)
// we can change name of setCounter to any name same as in function during passing paramter
  const addValue = () =>{

       //counter=counter+1;
       setCounter(counter+1)
       //console.log("value addded",counter);
  }
   const RemoveValue = () =>{

       //counter=counter+1;
       setCounter(counter-1)
      // console.log("value Removed",counter);
  }


  return (
    <>
     <h1> Hello </h1>
     <h2>Counter Value:{counter}</h2>
     <h3>Here also count will change:{counter}</h3>
     <button
     onClick={addValue}
     >Add value</button>
     <br/>
     <button
     onClick={RemoveValue}
     >Remove value</button>
    </>
  )
}

export default App
