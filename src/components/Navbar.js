import React from'react';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import "../index.css";

let NavbarWrapper = ({ cart }) =>
    <div className="navbar"> 
        <div className="app-name">
            <Link className="app-name-link" to="/">Etsetera</Link>
        </div>
        <div className="sign-in">
            <Link className="sign-in-link" to="/login">SignIn</Link>
        </div>
        <div className="cart">
            <Link className="cart-link" to="/cart"><img className="cart-img" src="images/shopping_cart.svg" alt="cart"/>{cart.length}</Link>
        </div>
    </div>


let mapStateToProps = state => ({ cart: state.cart });

let Navbar = connect(mapStateToProps)(NavbarWrapper);

export default Navbar;