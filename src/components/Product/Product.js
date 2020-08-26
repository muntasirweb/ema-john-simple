import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    const { img, name, seller, price, stock } = props.product;
    return (
        <div className="product">
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h4 className="product-name">{name}</h4>
                <br />
                <p><small>by: {seller}</small></p>
                <br />
                <p>${price}</p>
                <p><small>only {stock} left in stock - order soon</small></p>
                <button className="buy-now-btn" onClick={() => props.addProductHandler(props.product)}><FontAwesomeIcon icon={faCartPlus} /> add to cart</button>
            </div>
        </div>
    );
};

export default Product;