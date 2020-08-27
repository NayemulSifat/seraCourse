import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Cart.css';
import {Button} from 'react-bootstrap';

const Cart = (props) => {
    const cart = props.cart;
    const subTotal = cart.reduce((subTotal, bgt) => subTotal + bgt, 0);
    let tax = 0;
    if(subTotal < 500){
        tax = subTotal*0.02;
    }
    else if(subTotal < 2000){
        tax = subTotal*0.05;
    }
    else{
        tax = subTotal*0.1;
    }
    const total = subTotal+tax;
    Number(
    subTotal.toFixed(2),
    tax.toFixed(2),
    total.toFixed(2)
    );
    return (
        <div className="orderSummary">
            <h1>Course Summary</h1>
            <br/>
            <h5>Total Ordered:{cart.length}</h5>
            <h4>Subtotal: $ <strong>{subTotal}</strong> </h4>
            <h4>Tax: $ {tax} </h4>
            <br/>
            <h3>Total: $ <strong> {total}</strong></h3>
            <br/>
            <Button className="btn btn-default"> <FontAwesomeIcon icon={faShoppingCart}/> Order Confirm</Button>
            </div>

    );
};

export default Cart;