import React from "react";
import Cart from "./components/Cart";
import Category from "./components/Category";
// import Cat from "./components/Cat-Del";
import Homepage from "./components/Homepage";
import Login from "./components/Login";
import ProductDetailPage from "./components/ProductDetailPage";
// import Product from "./components/Product-Del";
// import Products from "./components/Products";
import RegisterUser from "./components/RegisterUser";


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
            <Route exact path="/login" component={Login} />
            {/* <Route exact path="/products" component={Products} />   */}
            <Route exact path="/product/:id" component={ProductDetailPage} />
            <Route exact path="/register" component={RegisterUser} />           
        </div>
    </Router>

export default Routes;