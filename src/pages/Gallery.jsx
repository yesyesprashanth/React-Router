import { useNavigate } from "react-router-dom";
function Gallery(){
    const navigate = useNavigate();
    return(
        <>
        <h1>Gallery</h1>
        <button onClick={()=>navigate(-1)}>Go to Home</button>
        </>
    )
}

export default Gallery;