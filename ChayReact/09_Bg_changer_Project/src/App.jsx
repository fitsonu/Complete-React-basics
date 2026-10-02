import { useState } from 'react'
import './App.css'

function App() {
  const [color , setColor]=useState("#80ced6")
  return (
    <div className="w-full h-screen" style={{backgroundColor:color}}>
        <h1 className="font-bold text-7xl text-center h-20px w-full py-9">Color Picker Game</h1>
      <div className="fixed flex flex-wrap justify-center bottom-15 inset-x-0  px-2 py-2 pb-8 }">
      
        <div className="fixed flex flex-wrap justify-center  px-2 py-2 gap-4 bg-white rounded-3xl -10 }">
          
           <button
           // onClick={setColor} 
           //  ->Limitation cannot pass value 
           //onClick={setColor()} ->limitation function called but return hone k baad jo value hoga wah button onClick me jayega which may change desired value
           onClick={()=>setColor("red")} 
           //->onClick syntax want a function so we do it as.
  
           className=" bg-red-500 px-5 py-2 rounded-full shadow-md text-2xl">red</button>
           <button  onClick={()=>setColor("blue")}   className=" bg-blue-500 px-5 py-2 rounded-full shadow-md text-2xl">blue</button>
           <button  onClick={()=>setColor("pink")}    className=" bg-pink-800 px-5 py-2 rounded-full shadow-md text-2xl">pink</button>
           <button  onClick={()=>setColor("violet")}  className=" bg-violet-500 px-5 py-2 rounded-full shadow-md text-2xl">violet</button>
           <button  onClick={()=>setColor("green")}   className=" bg-green-500 px-5 py-2 rounded-full shadow-md text-2xl">green</button>
           <button  onClick={()=>setColor("purple")}     className="bg-purple-500 px-5 py-2 rounded-full shadow-md text-2xl">Purple</button>
           <button  onClick={()=>setColor("orange")}  className=" bg-orange-500 px-5 py-2 rounded-full shadow-md text-2xl">orange</button>
           <button  onClick={()=>setColor("yellow")}  className=" bg-yellow-500 px-5 py-2 rounded-full shadow-md text-2xl">yellow</button>
           <button  onClick={()=>setColor("white")}   className=" bg-white px-5 py-2 rounded-full shadow-md text-2xl">white</button>
        </div>
      </div>
    </div>
  )
}

export default App
