import Card from './Components/Card.jsx'
function App() {
  return (
  <>
   <div className="parent">
    <Card user="Pawan" age={22} img="https://i.pinimg.com/736x/ca/b1/fa/cab1fa9874d463c9ebd6485356826592.jpg"/>
    <Card user="Naina" age={35} img="https://i.pinimg.com/736x/df/69/40/df6940fd636d47435b4202618705da28.jpg"/>
     <Card user="Vidhyak" age={45} img="https://i.pinimg.com/736x/09/f0/cb/09f0cbd24fc08fabe14389c6897b77f4.jpg"/>
    </div> 
    </>
  )
}

export default App
