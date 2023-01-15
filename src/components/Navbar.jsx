import {NavLink} from 'react-router-dom'
import './Navbar.css'
function Navbar(){
    return(
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/products">Products</NavLink>
        </nav>
    )
}

export default Navbar;