
import { ArrowRight } from 'lucide-react';
const RightCardContent=(props)=>{
    return (
   

        <div className='absolute top-0 left-0 h-full w-full p-5 flex flex-col justify-between'>
            <h2 className='bg-white text-xl font-bold rounded-full h-12 w-12 flex justify-center items-center'>{props.id+1}</h2>
                <div>
                  <p className='text-xl  mb-5 text-white'>{props.intro}</p>
                       <div className='flex justify-between'>
                           <button style={{backgroundColor:props.color}} className=' text-white  rounded-full px-8 py-2' >{props.tag}</button>
                           <button className='bg-blue-600 text-white  rounded-full px-4 py-3'><ArrowRight /></button>
                         </div>
                </div>
          </div>
     
 )}
export default RightCardContent