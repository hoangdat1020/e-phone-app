import React from 'react';
import {Link } from 'react-router-dom';

export default function CartTotals({value}) {
   const {cartTax,
    cartTotal,
    cartSubTotal,clearCart}= value;
    return (
        <React.Fragment>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-10 mx-auto ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right mt-2">
                            <Link to="/">
                                <button className="btn btn-outline-danger text-uppercase mb-3 px-5"
                                onClick={()=>clearCart()}
                                
                                >
                                        Clear Cart
                                </button>
                            </Link>
                            <h5 className="text-title">subtotal : $ {cartSubTotal}</h5>
                            <h5 className="text-title">tax : $ {cartTax}</h5>
                            <h5 className="text-title">total : $ {cartTotal}</h5>
                    </div>
                </div>
            </div>

        </React.Fragment>
    )
}
