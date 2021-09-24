import './Shop.css'
import React, { useEffect, useState } from 'react';
import Product from './Product/Product';
import Cart from '../Cart/Cart';

const Shop = () => {

    const [products, setProducts] = useState([]);

    const [cart, setCart] = useState([]);

    const handleAddCart = (product) => {

        const newCart = [...cart, product];
        setCart(newCart);
    }

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

                        return <Product key={product.key} data={product} eventHandler={handleAddCart}></Product>
                    })
                }
            </div>
            <div className="cart">
                <Cart cart={cart} ></Cart>
            </div>
        </div>
    );
};

export default Shop;