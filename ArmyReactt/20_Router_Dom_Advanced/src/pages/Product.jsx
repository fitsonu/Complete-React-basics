import {Link,Outlet} from 'react-router-dom'
import Men from './Men.jsx'
function Product(){
    return(
      <div>
        <div className='flex justify-center gap-10 py-4'>
            <Link className='text-xl font-semibold' to='/Product/men'>Men's Collection</Link>
            <Link className='text-xl font-semibold' to='/Product/women'>Women's Collection</Link>
        </div>
        <Outlet/>
      </div>
    )
}
export default Product