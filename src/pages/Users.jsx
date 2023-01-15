import { Link, Outlet,useSearchParams } from "react-router-dom";

function Users(){
    const [URLSearchParams, SetURLSearchParams] = useSearchParams();
    const showActiveUsers = URLSearchParams.get('filter')==='active';
     return(
        <>
            <Link to="1">User1</Link>
            <Link to="2">User2</Link>
            <Link to="3">User3</Link>
            <Outlet />
            <div>
                <button onClick={()=>SetURLSearchParams({filter:'active'})}>Active users</button>
                <button onClick ={()=>SetURLSearchParams({})}>Reset filter</button>
            </div>
            {
                showActiveUsers?<h2>Show Active Users</h2>:<h2>Show all users</h2>
            }
        </>
    )
}

export default Users;