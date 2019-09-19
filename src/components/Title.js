import React from 'react'

export default function Title({title}) {
    return (
        <div className="row py-3">
            <div className="col-10 mx-auto col-md-8 text-center text-title text-danger">
                <h1 className="text-capitalize">{title}</h1>
            </div>
        </div>


    )
}
