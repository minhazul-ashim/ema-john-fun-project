import React from 'react';
import logo from '../../images/logo.png'
import './Header.css'

const Header = () => {
    return (
        <div className='header-container'>
            <div className="banner">
                <img src={logo} alt="" />
            </div>
            <nav>
                <a href="#d">Shop</a>
                <a href="#d">Order Review</a>
                <a href="#g">Manage Inventory</a>
            </nav>
        </div>
    );
};

export default Header;