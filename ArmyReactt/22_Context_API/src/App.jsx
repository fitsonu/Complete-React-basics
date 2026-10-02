import { useState } from 'react'
import Navbar from './Component/Navbar.jsx'
import ThemeContext from './Context/ThemeContext.jsx'
function App() {

const [theme,setTheme] = useState('light');
  return (
  <>
  <Navbar theme={theme}>
    <h2>This is navbar</h2>
    <h4>In form of object</h4>
  </Navbar>
  </>
  
  )
}

export default App
