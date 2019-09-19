import React, { Component } from 'react'

export default class Default extends Component {
    render() {
        console.log(this.props);
        
        return (
            <div className="container text-center mt-5">
                <div className="row">
                    <div className="col-10 mx-auto col-md-8">
                        <h5 className=" text-uppercase" >
                            404 error page not found
                            the request URL {" "}
                            <span className="text-danger">
                            {this.props.location.pathname} {" "}
                            </span>

                            was not found 
                        </h5>
                    </div>
                </div>
            </div>
        )
    }
}
