import axios from "axios";
import { useEffect, useState } from "react";
import { BrowserRouter, Link } from "react-router-dom";


export function TutorialManage(){
    const[videos,setvideos]=useState([]);

    useEffect(()=>{
        axios({
            method:'get',
            url:'http://127.0.0.1:5566/videos'
        }).then((response)=>{
            setvideos(response.data);
        })
    },[]);

    return(
        <div>
            <h2>Manage Videos</h2>
            <div className="mb-2">
                <Link to="/addvideo" className="btn btn-info">Add New Videos</Link>
            </div>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Preview</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        videos.map(video=>
                        <tr key={video.id}>
                            <td>{video.title}</td>
                            <td>
                                <iframe src={video.url} width="200" height="100"></iframe>
                            </td>
                            <td>
                                <Link to={`/details/${video.id}`} className="btn btn-primary">
                                    <span className="bi bi-eye"> Details</span>
                                </Link>
                                <Link to={`/edit/${video.id}`} className="btn btn-warning ms-2">
                                    <span className="bi bi-pen"> Edit</span>
                                </Link>
                                <Link to={`/delete/${video.id}`} className="btn btn-danger ms-2">
                                    <span className="bi bi-trash"> Delete</span>
                                </Link>
                            </td>
                        </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}