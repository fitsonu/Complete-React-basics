import { useState } from 'react'
import Navbar from './Components/Navbar.jsx'
import Footer from './Components/Footer.jsx'
import Home from './pages/Home.jsx'
import Product from './pages/Product.jsx'
import About from './pages/About.jsx'
import {Route,Routes} from 'react-router-dom' 
import NotFound from './pages/NotFound.jsx'
import Men from './pages/Men.jsx'
import Women from './pages/Women.jsx'
import Courses from './pages/Courses.jsx'
import CourseDetail from './pages/CourseDetail.jsx'
import NavbarButton from './Components/Navbar2.jsx'
function App() {
 

  return (
<>
<div className="h-screen bg-black w-100% text-white">

<Navbar/>
<NavbarButton/>
<Routes>
  <Route path='/' element={<Home/>}></Route>
  <Route path='/About' element={<About/>}></Route>
  <Route path='/Courses/:CourseId' element={<CourseDetail/>}></Route>
  <Route path='/Courses' element={<Courses/>}></Route>
  <Route path='/Product' element={<Product/>}>
     <Route path='Men' element={<Men/>}></Route>
     <Route path='Women' element={<Women/>}></Route>
  </Route>
  <Route path='*' element={<NotFound/>}></Route>
  
</Routes>

<Footer/>
</div>
</>
  )
}

export default App
