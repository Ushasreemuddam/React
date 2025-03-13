import { useState,useEffect } from "react";
export function Loader(){

    const[status,setStatus]=useState(1);
    const[textContainer,setTextContainer]=useState({display:'none'});
    const[imgContainer,setimgContainer]=useState({display:'none'});

    var count=1;
    function Loading(){
        if(count===100){
            setimgContainer({display:'block'});
            setTextContainer({display:'none'})
        }else{
            count++;
            setStatus(count);
        }
    }

    function handleLoadClick(){
        setTextContainer({display:'block'})
        setInterval(Loading,200);
    }

    return(
        <div className="container-fluid">
            <button className="btn mt-2 btn-primary" onClick={handleLoadClick}>Load Image</button>
            <div className="d-flex  justify-content-center align-items-center" style={{height:'500px'}}>
                <div className="text-center" style={textContainer}>
                    <div className="spinner-border"></div>
                    <p>{status}%</p>
                    <p>Loading..</p>
                </div>
                <div>
                    <img style={imgContainer} src="images/digital-marketing.jpg" width="300" height="300"/>
                </div>
            </div>

        </div>
    )
}