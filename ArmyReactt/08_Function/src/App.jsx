function App() {

  function btnClicked(){
    console.log('button is clicked');
  }

  function inputIsChanging(){
    console.log('User is Typing');
  }

  function mouseEnter(){
    console.log("mouse is enterd")
  }
  function inputChanging(val){
    console.log(val);
  }
  const  pageScrolling = (elem)=>{
    console.log('page is scrolling at speed..',elem);
  }

 return (
  <>
   <div>
     <button onClick={btnClicked}>Click here</button>
      <br></br>

     <button onClick={() =>{
      console.log('Button clicked and function is inside button');
     }}>Click here</button>
     <br></br>

     <input onChange={inputIsChanging}type="text" placeholder='Enter name'></input>
     <br></br>

     <button onClick={btnClicked} onMouseEnter={mouseEnter} >Mouse click</button>
     <br></br>

       {/*same input me define kr rhe*/}
      <input 
      onChange={function (elem){
      console.log(elem.target.value);
    }}
       type="text"
       placeholder='Enter name'>
       </input>
       

       <br></br>
       <br></br>

       {/* function call me bhej rhe*/}
       <input 
       onChange={function (elem){
       inputChanging(elem.target.value)
      }}
       type="text"
       placeholder='Enter name'>
       </input>



      <div 
      onMouseMove={(elem)=>{
        console.log(elem.clientX);
      }}
      className='box'>
      </div> 
   </div>

   <div>
        <div
        onWheel={(elem)=>{
        pageScrolling(elem.deltaY)
        }}>
         <div className="page1"></div>
         <div className="page2"></div>
        </div>  
   </div>
   </>
 )
}

export default App
