import axios from "axios";
import { useEffect,useState } from "react";
import { Link } from "react-router-dom";

export function ShoppingHome(){
    const[catageries,setCategery]=useState([]);

    useEffect(()=>{
        axios({
            method:"get",
            url:"http://fakestoreapi.com/products/categories",
        })
        .then((response)=>{
            setCategery(response.data);
        })
    },[]);

    return(
        <div className="container-fluid">
            <div >
            <ol>
            {
                catageries.map(category=>
                    <li key={category}>
                    <Link to={`/products/${category}`} className="text-decoration-none">{category.toUpperCase()}</Link>
                    </li>
                    
                    )
            }
            </ol>
            </div>
        </div>
    )
}