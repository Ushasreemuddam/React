import { useState, useEffect } from "react";
import axios from "axios";
import './nasastyle.css'

export function NasaApi() {
    const [nasaObject, setNasaObject] = useState([]);
    
    useEffect(() => {
        axios.get("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY")
        .then(response => {
            setNasaObject(response.data.photos);
        })
        .catch(error => {
            console.error("Error fetching data:", error);
        });
    }, []);

    return (
        <div className="container-fluid">
             <h2>Mars Rover Photos</h2>
            <main className="d-flex flex-wrap justify-content-around" >
                {nasaObject.map(item => (
                    <div key={item.id} className="card m-2 p-2" style={{ width: '250px', height: '320px' }}>
                        <img src={item.img_src} className="card-img-top" height="150px" />
                        <div className="card-header">{item.id}</div>
                        <div>
                            <dl>
                                <dt>Camera Name</dt>
                                <dd>{item.camera.full_name}</dd>
                                <dt>Rover Name</dt>
                                <dd>{item.rover.name}</dd>
                            </dl>
                        </div>
                    </div>
                ))}
            </main>
        </div>
    );
}
