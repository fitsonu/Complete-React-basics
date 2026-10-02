import { useState } from 'react'
function App() {
  //  const  [num, setNum]=useState([1,2,3,4])
  const [num,setNum]=useState({user:'sonu',age:21})
  //const  [num, setNum]=useState(10)
  const btnClicked=()=>{
    const newNum={...num}; 
    newNum.user='monu' // destructuring 
    newNum.age=29      // destructuring 
   setNum(newNum) 
  
  // destructuring in array
  // const newNum=[...num]
  // newNum.push(99)
  // setNum(newNum)

  // method to set 
  // setNum(prev=>({...prev,age:50}))
  
  //  // called batch update -> bhut quick change
  //setNum(num+1)
  // setNum(num+1)
  // setNum(num+1)
   
  // batch problem solved
  // setNum(prev=>(prev+1))
  //  setNum(prev=>(prev+1))
  }
  return (
   <>
   {/* <h1>{num.user},{num.age}</h1> */}
   <h1>{num.user} {num.age}</h1>
   <button onClick={btnClicked}>Click me</button>
   </>
  )
}

export default App
