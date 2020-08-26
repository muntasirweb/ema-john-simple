import React from 'react';
import fakeData from '../../fakeData';
import { useState } from 'react';
import './Shop.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';

const Shop = () => {
    const fake10 = fakeData.slice(0, 10);
    const [products, setProducts] = useState(fake10);
    const [cart, setCart] = useState([]);

    //console.log(products);
    const addProductHandler = (product) => {
        //console.log("Added", product);
        const newCart = [...cart, product];
        setCart(newCart);
    }
    return (
        <div className="shop-container">
            <div className="product-container">
                {
                    products.map(product => <Product product={product} addProductHandler={addProductHandler}></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart ={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;