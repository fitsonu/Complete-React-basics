import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// function MyApp(){
//   return (
//     <div>
//       <h1>Custom React</h1>
//     </div>
//   ) 
// }
// const ReactElement ={
//   type:'a',
//   props:{
//     href:'https://google.com',
//     target: '_blank'
//   },
//   children:'click me to visit google'
// }
 
// const anotherElement = (
//   <a href="https://google.com" target='_blank'>Visit google2</a>
// )

const anotherUser = "chai aur code"
const reactElement = React.createElement(
  'a',
  {href: 'https://google.com', target: '_blank'},
  'click me to visit google',
  anotherUser
)
//anotherUser is present in object form as here in last



ReactDOM.createRoot(document.getElementById('root')).
render(
<App/>
)
