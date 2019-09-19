import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import PropTypes from 'prop-types';
import {ProductConsumer} from '../context';
export default class Product extends Component {
  render() {
    const { img, title, id, price, inCart } = this.props.product;
    return (
      <ProductWrapper className="col-10 mx-auto col-md-6 col-lg-3 py-3">
        <div className="card">
          <ProductConsumer >
            {value=>(
              <div
              className="img-container p-5"
                 onClick={()=>{
                    value.handleDetail(id)
                 }}
            >
              <Link to="/details">
                <img src={img} alt="img" className="card-img-top" />
              </Link>
              <button
                className="cart-btn"
                disabled={inCart ? true : false}
                onClick={() => {
                  value.addToCart(id);
                  value.openModal(id);
                }}
              >
                {inCart ? (
                  <p className="text-capitalize" disabled>
                    {" "}
                    In Cart
                  </p>
                ) : (
                  <i className="fa fa-cart-plus" aria-hidden="true"></i>
                )}
              </button>
             
            </div>

            )}
          
          </ProductConsumer>
          <div className="card-footer justify-content-between d-flex mt-5">
              <p>{title}</p>
              <h5>${price}</h5>
            </div>

        </div>

      </ProductWrapper>
    );
  }
}
Product.propTypes={
    product: PropTypes.shape({
        id: PropTypes.number,
        img:PropTypes.string,
        title:PropTypes.string,
        price:PropTypes.number,
        inCart:PropTypes.bool,

    }).isRequired
}
const ProductWrapper=styled.div`
.card {
    border-color: transparent; 
    transition: all 1s linear;
}
.card-footer{
    
    background:transparent;
    border-top:none;
    transition:all 1s linear;
}
&:hover{
    .card{
        border:0.04rem solid rgba(0,0,0,0.2);
        box-shadow: 2px 5px 5px 0px rgba(0,0,0,0.2);

    }
    
}
.img-container{
    position:relative;
    overflow:hidden;
}
.card-img-top{
    
    transition: all 1s linear;
}
.img-container:hover .card-img-top{
    transform:scale(1.2);
}
.cart-btn{
    margin-top:1rem;
    position: absolute;
    right:0;
    bottom:0;
    border: none;
    font-size: 1.6rem;
    padding-left:1rem;
    color:white;
    border-top-left-radius: 0.2rem;
    border-bottom-left-radius: 0.2rem;
    background: #2ECCFA ;
    transform: translate(100%,100%);
    transition: all 1s linear;
   
}
.img-container:hover .cart-btn {
    transform: translate(0,0);

}
.cart-btn:hover{
    color:red;
    background:white;
    cursor:pointer;
}
`;

