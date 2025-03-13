import { useState,useEffect } from "react";

export function ApiXmlHttpRequest(){
    const[Product,setProduct]=useState({Name:'',Price:0,Stock:false,ShippedTo:[],Rating:{Rate:0,Count:0}})
    useEffect(()=>{
        var http= new XMLHttpRequest();
        http.open("Get","product.json",true);
        http.send();
        http.onreadystatechange=function(){
            if(http.readyState==4){
                setProduct(JSON.parse(http.responseText))
            }
        }
    },[]);

    return(
        <div className="container-fluid">
            <h2>Product Details</h2>
            <dl>
                <dt>Name</dt>
                <dd>{Product.Name}</dd>
                <dt>Price</dt>
                <dd>{Product.Price}</dd>
                <dt>Stock</dt>
                <dd>{(Product.Stock==true)?"Available":"Out of Stock"}</dd>
                <dt>Shipped To</dt>
                <dd>
                    <ol>
                        {
                            Product.ShippedTo.map((city)=>
                            <li key={city}>{city}</li>
                            )
                        }
                    </ol>
                </dd>
                <dt>Rating</dt>
                <dd>{Product.Rating.Rate} <span className="bi bi-star-fill"></span> [{Product.Rating.Count}]</dd>
            </dl>
        </div>
    )

}