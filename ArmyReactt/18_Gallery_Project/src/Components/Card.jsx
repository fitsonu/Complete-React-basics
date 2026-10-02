import react from 'react'

function Card(props){
console.log(props)
    return(
     <div>
         <a href={props.elem.url} target='_blank'>
               <div className="h-55 w-55 bg-white overflow-hidden rounded-xl">
                 <img className="h-full w-full object-cover " src={props.elem.download_url} alt="image"/>
               </div>
               <h2 className='text-white'>{props.elem.author}</h2>
            </a>
     </div>
    )

}
export default Card