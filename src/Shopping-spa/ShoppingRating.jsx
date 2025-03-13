import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export function ShoppingRating() {
    const params = useParams();
    const [product, setProduct] = useState({});

    useEffect(() => {
        axios({
            method: 'get',
            url: `http://fakestoreapi.com/products/${params.prodId}`
        })
        .then(response => {
            setProduct(response.data);
        })
        .catch(error => {
            console.error("Error fetching product data:", error);
        });
    }, [params.prodId]);

    return (
        <div className="container-fluid">
            <h2>Rating</h2>
            <dl>
                <dd>
                    <span className="bi bi-star-fill text-success"></span>
                    {product.rating ? `${product.rating.rate} [${product.rating.count}]` : "No rating"}
                </dd>
            </dl>
        </div>
    );
}
