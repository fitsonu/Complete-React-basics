import { useState } from 'react'

function App() {
 const [num , setNum]=useState(0)
 

 function Increasing(){
  
  setNum(num+1);
 }
 function Decreasing(){
  setNum(num-1);

 }
 function increase5(){
  setNum(num+5);
 }
  return (
<>
<h1>{num}</h1>
<div>
  <button onClick={Increasing}>Increasing</button>
  <button onClick={Decreasing}>Decreasing</button>
  <button onClick={increase5}>Increase by 5</button>
</div>
</>
  )
}

export default App
