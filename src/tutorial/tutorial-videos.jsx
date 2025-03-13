import { useEffect } from "react"
import { useCookies } from "react-cookie"
import { useNavigate } from "react-router-dom";

export function TutorialVideos(){
    const[cookies,setCookie,removeCookie]=useCookies();
    const navigate=useNavigate();

    useEffect(()=>{
        if(cookies.userid==undefined){
            navigate("/login")
        }
    },[]);

    function handleSignout(){
        removeCookie("userid");
        navigate("/login")
    }

    return(
        <div>
            <h2>Vedios Home - {cookies.userid} <span><button onClick={handleSignout} className="btn btn-link">SignOut</button></span></h2>
            <div className="d-flex">
                <div className="me-4">
                    <iframe src="https://www.youtube.com/embed/tm7kVn8abSg" height={300} width={400}></iframe>
                </div>
                <div>
                    <iframe src="https://www.youtube.com/embed/kiAK3FcwUYA" height={300} width={400}></iframe>
                </div>
            </div>
        </div>
    )
}