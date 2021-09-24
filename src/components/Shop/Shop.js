import './Shop.css'
import React, { useEffect, useState } from 'react';
import Product from './Product/Product';

const Shop = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {

        fetch('./products.JSON')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <div className='shop-container'>
            <div className="products-container">
                <h2>Total Products : {products.length}</h2>

                {
                    products.map(product => {

                        return <Product key={product.key} data={product}></Product>
                    })
                }
            </div>
            <div className="cart-info">
                <h2>My Cart</h2>
            </div>
        </div>
    );
};

export default Shop;