import React from 'react'
import {Bookmark} from 'lucide-react'

const AmazonCard = (props)=>{
  console.log(props.company);
    return(
        <div className="Card">

      <div>
        <div className="Top"> 
        <img src={props.logo}></img>
        <button>Save <Bookmark size={20}/></button>
        </div>
        <div className="Center">
         <h3>{props.company}<span>{props.posted}</span></h3>
         <h2>{props.post}</h2>
         <div className="tag">
            <h4>{props.tag1}</h4>
            <h4>{props.tag2}</h4>
          </div>
        </div>
      </div>

     <div className="Bottom">
         <div className="data">
          <h3>{props.stipend}</h3>
          <p>{props.location}</p>
         </div>
         <button>Apply now</button>
       </div>
    </div>
    )
}
export default AmazonCard