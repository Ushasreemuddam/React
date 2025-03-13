import { useParams,Link,Route,Routes } from "react-router-dom";
import { useState,useEffect } from "react";
import axios from "axios";
import { ShoppingRating } from "./ShoppingRating"; 

export function ShoppingDetails(){
    const params=useParams();
    const [product,setProduct]=useState({});
    useEffect(()=>{
        axios({
            method:'get',
            url:`http://fakestoreapi.com/products/${params.prodId}`
        })
        .then(response=>{
            setProduct(response.data);
        })
    },[params.prodId]);

return(
    <div className="container-fluid">
        <h2>Product Details</h2>   
        <dl>
            <dt>Title</dt>
            <dd>{product.title}</dd>
            <dt>Preview</dt>
            <dd><img src={product.image} width="200" height="200"/></dd>
            <dt>Price</dt>
            <dd>{product.price}</dd>
            <dt>Rating</dt>
            <dd>
            <span className="bi bi-star-fill text-success"></span>
            {product.rating ? `${product.rating.rate} [${product.rating.count}]` : "No rating"}
            </dd>

        </dl>
        <Link to={`/products/${product.category}/details/${product.id}/rating`}>Rating</Link>
        <p>
            {/* <Link to={`/products/${product.category}`}>Back to {product.category}</Link> */}
            <Routes>
            <Route path="/Rating" element={<ShoppingRating />} />
            </Routes>
        </p>
    </div>
)
}