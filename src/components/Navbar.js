import React from'react';
import { Link } from 'react-router-dom';
import "../index.css";

let Navbar = () =>
    <div className="navbar"> 
        <div className="app-name">
            <Link className="app-name-link" to="/">Etsetera</Link>
        </div>
        <div className="sign-in">
            <Link className="sign-in-link" to="/login">SignIn</Link>
        </div>
        <div className="cart">
            <Link className="cart-link" to="/cart">cart</Link>
        </div>
    </div>

export default Navbar;