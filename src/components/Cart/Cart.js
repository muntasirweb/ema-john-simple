import React from 'react';

const Cart = (props) => {
    const cart = props.cart; 
    let itemTotal = 0;
    for (let i = 0; i < cart.length; i++) {
        const itemPrice = cart[i].price;
        itemTotal = itemTotal + itemPrice;
    }
    let shipping = 0;
    if(itemTotal > 35){
        shipping = 0;
    }
    else if(itemTotal > 15){
        shipping = 4.99;
    }
    else if(itemTotal > 0){
        shipping = 12.99;
    }
    const total = (itemTotal + shipping).toFixed(2);

    const vat = total/10;

    const grandTotal = (itemTotal + shipping + vat).toFixed(2);
    
    return (
        <div>
            <h2>Order Summery</h2>
                <h4>Items on cart: {cart.length}</h4>
    <p>Items: {itemTotal}</p>
    <p><small>Shipping and Handling: {shipping}</small></p>
    <p>Total Before Tax: {total}</p>
    <p>VAT and Tax: {vat.toFixed(2)}</p>
    <p>Grand Total: {grandTotal}</p>
        </div>
    );
};

export default Cart;