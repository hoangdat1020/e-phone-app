import React, { Component } from 'react';
import styled from 'styled-components';
import {ProductConsumer} from '../context';
import {ButtonContainer } from './Button';
import {Link } from 'react-router-dom';
export default class Modal extends Component {
    render() {
        return (
            <ProductConsumer>
                {value =>{
                    const {modalOpen,closeModal}=value;
                    const {img,title,price}= value.modalProduct;
                    if(!modalOpen){
                        return null;
                    }
                    else{
                        return (
                          
                        <ModalContainer>
                                <div className="container">
                                    <div className="row">
                                        <div id="modal" className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize">
                                            <h5 className="mt-5">Item Added to the cart</h5>
                                            <img src={img} alt="img" className="img-fluid"/>
                                            <h5>{title}</h5>
                                            <h5 className="text-muted">price : ${" "}{price}</h5>
                                            <Link to="/">
                                                <ButtonContainer cart onClick={()=> closeModal()}>
                                                    Store
                                                </ButtonContainer>


                                            </Link>
                                            <Link to="/cart" >
                                                <ButtonContainer className="mb-5 mt-3" cart onClick={()=> closeModal()} >
                                                    Go to Cart
                                                </ButtonContainer>
                                            </Link>
                                            
                                        </div>
                                    </div>
                                </div>
                        </ModalContainer>
                        );
                    }

                  
                }}

            </ProductConsumer>
        )
    }
}
 const ModalContainer= styled.div`
 position:fixed;
 right:0;
 left:0;
 top:0;
 bottom:0;
 background:rgba(0,0,0,0.3);
display:flex;
justify-content:center;
align-items:center;
 #modal{
     background:white;
 }
 


 
 
 
 `;