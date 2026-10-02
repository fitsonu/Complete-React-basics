import { useState,useEffect } from 'react'
import axios from 'axios'
import Card from './Components/Card.jsx'

function App() {

  const [userData,setUserData]=useState([])
  const [index, setIndex]=useState(1)
  const GetData =  async () => {
   const response =  await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=15`)
                                   {/*console.log(response.data);*/} 
   setUserData(response.data);
                                 {/*  console.log(userData); */}
  }


  
  let printUserData = <h3 className="text-gray-500 text-xs font-bold absolute top-1/2 left-1/2 -translate-x-1/2  -translate-y-1/2">Loading...</h3>


  useEffect(function(){
  GetData()
  },[index])
  

  if(userData.length>0){
    printUserData = userData.map(function(elem,idx){
      return <div key={idx}>
              <Card elem={elem}/>
             </div>
    })
  }

  return (
  <>
  <div className="bg-black h-100vh overflow-auto w-full p-5 flex flex-wrap gap-4 justify-center items-center ">
    {/* <h1 className="text-white font-bold bg-red-500 w-5 fixed">  {index}</h1> */}
    {/* <div className="flex flex-wrap gap-4 p-6  bg-black h-[82%]"> */}
     {printUserData}
   {/* </div> */}
  </div> 
  
 
  <div className="gap-6 flex justify-center items-center bg-black h-full px-5 py-10">
   
    <button 
    style={{opacity: index == 1 ? 0.5:1}}
    onClick={()=>{
      if(index>1){
      setIndex(index-1)
      setUserData([])
    }
    }}
    className="bg-amber-500 text-black font-xm cursor-pointer active:scale-95 rounded h-10 w-20 font-bold " 
    >prev</button>
    <h4 className="text-white">Page{index}</h4>
    
    <button 
     onClick={()=>{
      setUserData([])
      setIndex(index+1)
    }}
    className="bg-amber-500 text-black font-xm cursor-pointer active:scale-95  h-10 w-20 rounded font-bold"
     >next</button>

  </div>
  </>
  )
}

export default App
