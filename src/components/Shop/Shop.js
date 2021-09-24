import './Shop.css'
import React, { useEffect, useState } from 'react';
import Product from './Product/Product';
import Cart from '../Cart/Cart';

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
                {
                    products.map(product => {

                        return <Product key={product.key} data={product}></Product>
                    })
                }
            </div>
            <div className="cart-info">
                <Cart></Cart>
            </div>
        </div>
    );
};

export default Shop;