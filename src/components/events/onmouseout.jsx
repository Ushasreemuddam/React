import { useState } from "react";

export function MouseOut(){
    const[photos]=useState(["images/Angular10.jpg","images/csharpnet.jpg","images/digital-marketing.jpg","images/Spring.jpg"])

    function HandleMouseover(e){
        e.currentTarget.stop();
    }
    function HandleMouseOut(e){
        e.currentTarget.start();
    }
    return(
        <div className="container-fluid">
            <div>
                <marquee scrollamount="10" onMouseOver={HandleMouseover} onMouseOut={HandleMouseOut}>
                    {
                        photos.map(photo=>
                            <img width={100} className="me-2" height="100" src={photo}/>
                            )
                    }

                </marquee>
            </div>
        </div>
    )
}