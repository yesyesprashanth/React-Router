import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
function Home(){
    const navigate = useNavigate();
    const[nav, setNav] = useState(false);
    useEffect(()=>{
        if(nav) navigate('/gallery');
    }, [nav])

    return<>
        <h1>Homepage</h1>
        <button onClick={()=>setNav(pv=>true)}>Gallery</button>
    </>
}

export default Home;