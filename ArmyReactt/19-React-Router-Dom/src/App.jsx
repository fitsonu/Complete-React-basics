import React from 'react'
import {Route,Routes} from 'react-router-dom'
import Home from "./Pages/Home.jsx";
import Contact from "./Pages/Contact.jsx";
import Navbar from './Component/Navbar.jsx'
function App() {
 

  return (
   <>
      <div>
      <Navbar/>
      <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/Contact' element={<Contact/>} />
     </Routes>
      </div>
     

   </>
  )
}

export default App
