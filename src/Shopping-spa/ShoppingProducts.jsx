import axios from "axios";
import { useState, useEffect } from "react";
import { Link, Routes, useParams, Route } from "react-router-dom";
import { ShoppingDetails } from "./ShoppingDetails"; 
import { ShoppingRating } from "./ShoppingRating";
export function ShoppingProducts() {
    const params = useParams();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios({
            method: 'get',
            url: `http://fakestoreapi.com/products/category/${params.catName}`
        })
        .then(response => {
            setProducts(response.data);
        })
    }, [params.catName]);

    return (
        <div className="container">
            <h2>{params.catName} Products</h2>
            <div className="row">
                <div className="col-6">
                    <div className="d-flex flex-wrap">
                        {products.map(product =>
                            <div key={product.id}>
                                <Link to={`details/${product.id}`}>
                                    <img className="me-2 mb-2 border border-1 border-primary p-2" src={product.image} width="100px" height="100px" alt={product.title} />
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
                <div className="col-6">
                    <Routes>
                        <Route path="details/:prodId" element={<ShoppingDetails />} />  
                    </Routes>
                    
                </div>
            </div>
            <Link to="/home">Back to Home</Link>
        </div>
    );
}
