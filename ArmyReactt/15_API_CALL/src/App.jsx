import axios from 'axios'
import {useState} from 'react'
function App() {

  const [data,setData]=useState([])

// async function getData(){
//   const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
//   console.log(response)
// }

// const getData = async () => {
//   const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
  
//   const data = await response.json()
//   console.log(data);
// }


// const getData =  async () => {
// const response = await axios.get('https://jsonplaceholder.typicode.com/todos/');

// console.log(response.data);
// }

const getData =  async () => {
const response = await axios.get('https://jsonplaceholder.typicode.com/todos/');
setData(response.data)
// console.log(response.data);
}


  return (
  <>
  <button onClick={getData}>get data</button>
  <div>
    {data.map(function(elem,idx){
      return <h3> index {idx}----   ID   {elem.id}  </h3>
    }
    )}
  </div>

  </>
  )
}

export default App
