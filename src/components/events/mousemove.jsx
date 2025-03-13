import { useState } from "react"

export function MouseMove(){
    const[styleobject,setstyleobject]=useState({'position':'','top':'','left':''});
    
    function HandleMouseMove(e){
        setstyleobject({
            'position':'fixed',
            'left':e.clientX+'px',
            'top':e.clientY+'px'
        })
    }

    return(
        <div onMouseMove={HandleMouseMove}>
            <div style={{height:"1000px"}}>
                <p>Move your mouse pointer to test.<br/>
                X={styleobject.left} Y={styleobject.top}
                </p>
            </div>
            <img src="images/Angular10.jpg" style={styleobject} width="50" height="100"/>
        </div>
    )
}