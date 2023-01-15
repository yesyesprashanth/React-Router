import { useParams } from "react-router-dom";
function Userdetails(){
    const {userid} = useParams();    
    return<div>User details {userid}</div>
}

export default Userdetails;