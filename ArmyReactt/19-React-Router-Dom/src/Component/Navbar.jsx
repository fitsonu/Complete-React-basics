import {Link} from 'react-router-dom'
function Navbar(){
    return(
        <div class="navbar">
         <h3>Single Page Application</h3>
         <div>
            <Link to='/'>Home</Link>
            <Link to='/Contact'>Contact</Link>
         </div>
        </div>
    )
}
export default Navbar