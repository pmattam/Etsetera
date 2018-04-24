import React from "react";
import Homepage from "./components/Homepage";
import Navbar from "./components/Navbar";
// import App from "./App";
import Categories from "./components/Categories";
import Products from "./components/Products";
import Cart from "./components/Cart";

import {
    HashRouter as Router,
    Route
} from "react-router-dom";

let Routes = () => 
    <Router>
        <div>
            <Navbar />
            <Route exact path="/" component={Homepage}/>
            <Route exact path="/categories" component={Categories}/>
            <Route exact path="/products" component={Products}/>
            <Route exact path="/cart" component={Cart}/>         
        </div>
    </Router>

export default Routes;
