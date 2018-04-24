import React from'react';
import { Link } from 'react-router-dom';

let Navbar = () =>
    <div>
        <Link to="/">Etsetera</Link>
        <Link to="/login">SignIn</Link>
        <Link to="/cart">cart</Link>
    </div>

export default Navbar;