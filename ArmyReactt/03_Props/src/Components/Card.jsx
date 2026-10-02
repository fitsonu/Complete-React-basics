
function Card(props) {
  return (
    
      <div className="card">
        <img src={props.img}></img>
        <h1>{props.user}</h1>
        <p>This is me {props.user}, and i am {props.age} year old. </p>
        
        <button>View Profile</button>
      </div>
  )
}
export default Card
