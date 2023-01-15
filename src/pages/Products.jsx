import { Link, Outlet} from "react-router-dom";
function Products(){
    return<>
        <input type="search" name="search" id="search" placeholder="Search Products" />
        <Link to="feature">feature</Link>
        <Link to="new">new</Link>
        <Outlet />
    </>
}

export default Products;