import React, { Component } from "react";
import { ProductConsumer } from "../context";
import { Link } from "react-router-dom";
import { ButtonContainer } from "./Button";

export default class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          const {
            id,
            company,
            img,
            info,
            price,
            title,
            inCart
          } = value.detailProduct;
          return (
            <div className="container py-5">
              <div className="row">
                <div className="col-10 mx-atuto text-center text-blue">
                  <h1 className="text-danger">{title}</h1>
                </div>
              </div>
              <div className="row">
                <div className="col-10 mx-auto col-md-6 my-3">
                  <img src={img} alt="img" className="img-fluid" />
                </div>
                <div className="col mx-auto col-md-6 my-3 text-capitalize">
                  <h2>model:{title}</h2>
                  <h4 className="text-muted">made by {company}</h4>
                  <h4>price: ${price}</h4>
                  <p className="font-weight-bold">some infor about product</p>
                  <p className="text-muted">{info}</p>
                  <div>
                    <Link to="/">
                      <ButtonContainer cart>back to products</ButtonContainer>
                    </Link>
                    <ButtonContainer
                    cart
                    disabled={inCart?true:false}
                    onClick={()=> {
                    value.addToCart(id);
                    value.openModal(id);
                    }
                    }
                    >
                        {inCart?"inCart" : "add to cart"}

                    </ButtonContainer>
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}
