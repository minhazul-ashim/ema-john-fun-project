import React from 'react';
import './Cart.css'

const Cart = (props) => {

    const products = props.cart;
    let total = 0;
    for (const element of products) {
        total += element.price
    }
    let tax = 0.2 * total;
    let grandTotal = tax + total;

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
                <div className="costs">
                    <h5>{products.length}</h5>
                    <h5>${total}</h5>
                    <h5>${tax.toFixed(2)}</h5>
                    <h5>${grandTotal.toFixed(2)}</h5>
                </div>
            </div>
        </div>
    );
};

export default Cart;