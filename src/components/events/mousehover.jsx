import { useState } from "react"
import './mousehover.css'
export function Mousehover(){
    const[photos]=useState(["images/Angular10.jpg","images/csharpnet.jpg","images/digital-marketing.jpg","images/Spring.jpg"])
    const[preview,setPreview]=useState("");

    function HandleMouseHover(e){
        setPreview(e.target.src)
    }
    return(
        <div className="container-fluid">
            <section className="row mt-2"> 
                <nav className="col-2" >
                {
                    photos.map(photo=>
                       <div className="mb-2 p-1 border border-2 border-primary" key={photo} style={{width:110}}>
                            <img src={photo} onMouseOver={HandleMouseHover} width="100" height="50"/>
                       </div> 
                        )
                }
                </nav>
                <main className="col-10">
                    <img width="450" height="280" className="preview-image" src={preview}/>
                </main>
            </section>
            
        </div>
    )
}