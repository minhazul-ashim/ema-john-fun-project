import './Shop.css'
import React, { useEffect, useState } from 'react';

const Shop = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {

        fetch('./products.JSON')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <div class='shop-container'>
            <div className="products-container">
                <h2>Total Products : {products.length}</h2>
                
            </div>
            <div className="cart-info">
                <h2>My Cart</h2>
            </div>
        </div>
    );
};

export default Shop;