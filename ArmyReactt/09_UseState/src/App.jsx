import { useState } from 'react'

function App() {
 const [A,setA]=useState(20)
  const [user,setuser]=useState("Sonu")
  const [arr,setArr]=useState([10,20,30])
 
   function changeNum(){
    setA(25)
    setuser("Monu")
    setArr([1,2,3])
 }

  return (
   <>
   <h1>Value of a is {A}
    <br>
    </br>
    Name of user is {user}
    <br></br>
    Value of array{arr}
     </h1>

   <button onClick={changeNum}>Click</button>
   </>
  )
}

export default App
