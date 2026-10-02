import { useState } from 'react'
import {Link} from 'react-router-dom'
function Navbar() {
  return (
    <div className="flex py-4 px-8 items-center bg-cyan-900 justify-between">
        <h2 className="text-2xl font-bold">Technologiya</h2>
        <div className="flex gap-10">

            <Link className='text-lg font-medium' to='/' > Home </Link>
            <Link className='text-lg font-medium' to='/About' > About </Link>
            <Link className='text-lg font-medium' to='/Product' > Product </Link>
             <Link className='text-lg font-medium' to='/Courses' > Courses  </Link>
         {/* <a className='text-lg font-medium' href="/" >Home</a>
         <a className='text-lg font-medium' href="/About" >About</a>
         <a className='text-lg font-medium' href="/Product">Product</a> */}
        
        </div>
    </div>
 )
}

export default Navbar
