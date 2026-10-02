import { useState } from 'react'
function App() {
const [title,setTitle] = useState('')

const submitHandler = (e)=>{
  e.preventDefault()
  console.log("Form  submitted by",title)
  setTitle('') /// input box ko refresh krne k liye kyuki default humne change kiya hua hai
}

  return (
   <div>
     <form onSubmit={(e)=>{
      // console.log("Form submitted") -> submit hone pe reload ho ja rha usey change krna hai
       submitHandler(e)
     }}>
    <input type="text" placeholder='Enter your name'
     
     value={title}
     onChange={(e)=>{
       setTitle(e.target.value);
     }}

    >

    </input>
    <button>Submit</button> 
     </form>
   </div>
  )
}

export default App
