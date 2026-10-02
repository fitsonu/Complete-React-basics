import RightCard from './RightCard'
const RightContent=(props)=>{
    return (
        <div id='right' className='h-full w-2/3 p-3 pb-3 flex overflow-x-auto flex-nowrap gap-10 '>
        {props.users.map(function(elem,idx){
         
         return <RightCard key={idx}  id={idx} img={elem.img} tag={elem.tag} intro={elem.intro} color={elem.color}/>
        })}
        </div>

 
 )}
export default RightContent
