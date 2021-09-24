import './Product.css'
import React from 'react';

const Product = (props) => {
    // console.log(props);
    const { name, img, seller, price, stock } = props.data;
    const eventFunc = props.eventHandler;

    // console.log(eventFunc)
    return (
        <div className='product-box'>
            <div className="product-image">
                <img src={img} alt="" />
            </div>
            <div className="product-details">
                <h3>{name}</h3>
                <p><small>By {seller}</small></p>
                <p><small>${price}</small></p>
                <p><small>Stock Left: {stock}</small></p>
                <button onClick={() => eventFunc(props.data)}>Add to Cart</button>
            </div>
        </div>
    );
};

export default Product;