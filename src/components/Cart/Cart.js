import React from 'react';
import './Cart.css'

const Cart = () => {
    return (
        <div className='cart-info'>
            <h4>Order Summary</h4>
            <div className="price-container">
                <div className="">
                    <h5>Products: </h5>
                    <h5>Price: </h5>
                    <h5>Tax: </h5>
                    <h5>Total:</h5>
                </div>
                <div className="">
                    <h5>5</h5>
                    <h5>$</h5>
                    <h5>$</h5>
                    <h5>$</h5>
                </div>
            </div>
        </div>
    );
};

export default Cart;