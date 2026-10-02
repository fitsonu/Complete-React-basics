import { useState } from 'react'


function App() {
 
// 1-> localStorage.clear
// 2-> localStorage.setItem("name","Sonu")

// 3-> const user=localStorage.getItem("name")
//     console.log(user);
 
// 4-> localStorage.removeItem('user')
 
// In form of object

const userr={
  userName:'Sonu',
  age:21
}
 
   localStorage.setItem('detail',userr)

   localStorage.setItem("userDetail",JSON.stringify(userr))


    const userdetail=JSON.parse(localStorage.getItem(userr))
     
 //localStorage.clear()

  return (
  <>
  <h1>Local storage of browser</h1></>
  )
}

export default App
