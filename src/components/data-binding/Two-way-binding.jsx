import {useState} from "react";
export function TwoWayBinding(){
    const[Product,setproduct]=useState({Name:'',Price:0,Stock:false});
    function handleNameChange(e){
        setproduct({
            Name:e.target.value,
            Price:Product.Price,
            Stock:Product.Stock
        })
    }
    function handlePriceChange(e){
        setproduct({
            Name:Product.Name,
            Price:e.target.value,
            Stock:Product.Stock
        })
    }
    function handleStockChange(e){
        setproduct({
            Name:Product.Name,
            Price:Product.Price,
            Stock:e.target.checked
        })
    }
    return(
        <div className="container-fluid">
            <h2>Register Product</h2>
            <dl>
                <dt>Name</dt>
                <dd><input type="text" onChange={handleNameChange} value={Product.Name}/></dd>
                <dt>Price</dt>
                <dd><input type="text" onChange={handlePriceChange} value={Product.Price}/></dd>
                <dt>Stock</dt>
                <dd><input type="checkbox" onChange={handleStockChange} checked={Product.Stock}/>{(Product.Stock==true)?"Available":"Out of stock"}</dd>
            </dl>
            <hr/>
            <dl>
                <dt>Name</dt>
                <dd>{Product.Name}</dd>
                <dt>Price</dt>
                <dd>{Product.Price}</dd>
                <dt>Stock</dt>
                <dd>{(Product.Stock==true)?"Available":"Out of Stock"}</dd>
                
            </dl>
        </div>
    )
}