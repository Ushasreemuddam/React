import { BrowserRouter,Routes,Route,Link } from "react-router-dom"
import {ShoppingHome} from "./ShoppingHome"
import {ShoppingProducts} from './ShoppingProducts'
import { ShoppingDetails } from "./ShoppingDetails"
import {  ShoppingRating } from "./ShoppingRating"

export function ShoppingIndex(){
    return(
        <div className="container-fluid">
            <BrowserRouter>
            <header className="bg-dark text-light p-2 mt-2 d-flex  justify-content-between">
                <div>Shopper</div>
                <div>
                    <span className="me-2 "><Link to="home" className="text-white text-decoration-none">Home</Link></span>
                    <span className="me-2"><Link to="/products/electronics" className="text-white text-decoration-none">Electronics</Link></span>
                    <span className="me-2"><Link to="/products/jewelery" className="text-white text-decoration-none">Jewelery</Link></span>
                    <span className="me-2"><Link to="/products/men's clothing" className="text-white text-decoration-none">Men's Clothing</Link></span>
                    <span className="me-2"><Link to="/products/women's clothing" className="text-white text-decoration-none">Women's Clothing</Link></span>
                </div>
                <div>
                    <span className="bi bi-person-fill me-2"></span>
                    <span className="bi bi-heart me-2"></span>
                    <span className="bi bi-search me-2"></span>
                    <span className="bi bi-cart4 me-2"></span>
                </div> 
            </header>
            <section className="mt-3 overflow-auto" style={{height:'500px'}}>
                <Routes>
                    <Route path="/" element={<ShoppingHome/>}/>
                    <Route path="home" element={<ShoppingHome/>}/>
                    <Route path="*" element={<div><h2 className="text-danger">Requested Path Not Found</h2></div>}/>
                    <Route path="products/:catName" element={<ShoppingProducts />}>
                        <Route path="details/:prodId" element={<ShoppingDetails />}>                
                        </Route>
                    </Route>
                    <Route path="/products/:catName/details/:prodId/rating" element={<ShoppingRating />} /> 
                    {/* <Route path="details/:prodId" element={<ShoppingDetails/>}/> */}
                    
                </Routes>
            </section>
            </BrowserRouter>
        </div> 
    )
}