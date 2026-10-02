import { useState } from 'react'
function App() {

const submitHandler = (e)=>{
  e.preventDefault()
  console.log("Form  submitted")
}

  return (
   <div>
     <form onSubmit={(e)=>{
      // console.log("Form submitted") -> submit hone pe reload ho ja rha usey change krna hai
       submitHandler(e)
     }}>
    <input type="text" placeholder='Enter your name'></input>
    <button>Submit</button> 
     </form>
   </div>
  )
}

export default App
