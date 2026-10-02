import { useState } from 'react'
import Section1 from './Components/Section1/Section1'
import Section2 from './Components/Section2/Section2'
function App() {
 const users = [
  {color:'DarkGray',
    img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D',
    intro:'" Professional growth comes from experience, curiosity, and the willingness to step outside your comfort zone and discover new possibilities."',
    tag:'Satisfied'
  },
   {color:'Gray',
    img: 'https://plus.unsplash.com/premium_photo-1682437317248-b8b00e36bb94?q=80&w=1026&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    intro:'“Success is built through consistent effort, smart decisions, and perseverance.”',
    tag:'Underserved'
  },
   {color:'LightSlateGray',
    img: 'https://plus.unsplash.com/premium_photo-1661769159995-f3af0089875f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d29ya2luZyUyMHByb2Zlc3Npb25hbCUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D',
    intro:'“Do meaningful work, create value, and make an impact. When passion meets purpose, every challenge becomes an opportunity to grow.”',
    tag:'Underbanked'
  },
  {color:'SlateGray',
    img: 'https://images.unsplash.com/photo-1684327596702-6bbbe1422375?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fHx8',
    intro:'“Great professionals stay open to new ideas and better solutions. Think creatively, adapt to change, and turn challenges into opportunities.”',
    tag:'Techno'
  },
  {color:'SlateGray',
    img: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    intro:'“Leadership begins with communicate with confidence, and create an environment where everyone can learn, contribute, and succeed together.”',
    tag:'Working professional'
  }
 ]
  return (
   <div> 
     <Section1 users={users} />
     <Section2/>
   </div>
  
  )
}

export default App
