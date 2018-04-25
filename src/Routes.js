import React from "react";
import Homepage from "./components/Homepage";
import App from "./App";
import Category from "./components/Category";
// import Cat from "./components/Cat-Del"
import ProductDetailPage from "./components/ProductDetailPage";
// import Product from "./components/Product-Del";
import Products from "./components/Products";
import Cart from "./components/Cart";

import {
    HashRouter as Router,
    Route
} from "react-router-dom";

let Routes = () => 
    <Router>
        <div>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/cart" component={Cart} />  
            <Route exact path="/category/:name" component={Category} />
            <Route exact path="/login" component={App} />
            <Route exact path="/products" component={Products} />  
            <Route exact path="/product/:id" component={ProductDetailPage} />           
        </div>
    </Router>

export default Routes;