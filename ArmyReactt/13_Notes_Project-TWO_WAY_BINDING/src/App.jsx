import { useState } from 'react'


function App() {
  
  const [title,setTitle]=useState('')
  const [details,setDetails]=useState('')
  const [task ,setTask]=useState([])

  const deleteNote =(idx)=>{
    // console.log('note deleted')


    const copyTask =[...task];
    // deleteting notes by passing whom index and 1 represnt only 1 from that idx
    copyTask.splice(idx,1)
    // again setting task back
    setTask(copyTask)
  }



  // changing default setting that is preventiing from autoReload
 const submitHandler = (e)=>{
  e.preventDefault()
  //console.log(title,details);
  

  //three step 1 copy task 2 push task into copy task  then setTask by adding in copied task
  const copyTask =[...task];
  copyTask.push({title,details})
  setTask(copyTask)
  //console.log(copyTask)

  setTitle('') 
  setDetails('')
   {/* it is used to refresh ionput box */}
 }

  return (
<div className='h-screen bg-black text-white lg:flex'>
  <form onSubmit={(e)=>{
    submitHandler(e)
  }}

   className='flex lg:w-1/2  gap-4  items-start flex-col p-10'>
    <h1 className="text-4xl font-bold">Add notes</h1>
  
   {/* for input */}
    <input 
     type="text"
     placeholder="Enter topic name"
     className=" w-full h-20 border-3 rounded-md  px-5   text-white text-base bg-black mb-7"
  
     value={title} 
     onChange={(e)=>{
      setTitle(e.target.value)
      
     }}>

     </input>
   
   {/* For details */}
<textarea
  placeholder="Write Details"
  value={details}
  onChange={(e) => setDetails(e.target.value)}
  className="w-full h-60 border-2 rounded-md px-3 py-3 mb-5 text-xl text-white bg-black resize-none overflow-auto"
></textarea>

     <button className="text-black active:bg-gray-300 active:scale-95 h-15 w-full border-2 rounded   bg-white text-2xl">Add Notes</button>
  </form>

<div className="lg:w-1/2 lg:border-l-2 bg-gray-900 p-5">
  <h1 className="text-4xl font-bold">Recent notes</h1>
  
    <div className=" mt-5 h-full gap-5 overflow-auto flex flex-wrap p-15">
    {task.map(function(elem,idx){
     return <div key={idx} className="h-52 w-40 rounded-xl flex justify-between flex-col items-start text-black py-7 p-3 bg-cover  overflow-hidden bg-[url('https://imgs.search.brave.com/c8EMhDiOBcUEHEtWaW5iORh2Rlf1j7OowT_Qd7iYE3M/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMjQv/NTg0LzQ1Mi9zbWFs/bC9ibGFuay1zcGFj/ZS13aGl0ZS1zdGlj/a3ktbm90ZS1wbmcu/cG5n')] ">
    <div className="w-full min-h-0 overflow-hidden">
      <h3 className="leading-tight text-lg font-bold">{elem.title}</h3>
      <p className="mt-3 text-xs leading-tight font-small text-gray-600  overflow-y-auto max-h-28 ">{elem.details}</p>
     </div>
      <button onClick={() => deleteNote(idx)} className=' cursor-pointer active:scale-95 bg-red-500 w-full py-1  text-white font-bold rounded text-xs'>Delete</button>
     </div>
    })}
    </div>
  </div>
</div> 
  )
}

export default App
