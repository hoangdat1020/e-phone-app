import React from 'react'

export default function CartColumns() {
    return (
        <div className="container-fluid text-center d-none d-lg-block">
            <div className="row text-uppercase">
                <div className="col-10 mx-auto col-lg-2">
                    Products
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    name of product
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    Price
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    quantity
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    remove
                </div>
                <div className="col-10 mx-auto col-lg-2">
                    total
                </div>

            </div>
            
        </div>
    )
}
