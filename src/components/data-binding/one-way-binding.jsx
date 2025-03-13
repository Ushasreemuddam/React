import React from "react";
import { useState } from "react";
export function OneWayBinding(){
    const[Product]=useState({Name:"Samsung Tv",Price:45000.44});
    const[Categories]=useState(["All","Electronics","Fashion"]);
    return(
        <div className="container-fluid">
            <h2>Product Details</h2>
            <dl>
                <dt>Name</dt>
                <dd>{Product.Name}</dd>
                <dt>Price</dt>
                <dd>{Product.Price}</dd>
            </dl>
            <h3>Select Category</h3>
            <select>
                {
                    Categories.map((category)=>
                    <option key={category}>{category}</option>)
                }
            </select>
        </div>
    )
}