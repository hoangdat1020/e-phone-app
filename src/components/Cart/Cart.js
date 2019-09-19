import React, { Component } from 'react'
import Title from '../Title';
import CartColumns from './CartColumns';
import {ProductConsumer} from '../../context';
import CartList from './CartList';
import CartTotals from './CartTotals'
export default class Cart extends Component {
    render() {
        return (
            <React.Fragment>
            <ProductConsumer>
                {value =>{
                 const {cart} = value;
                if(cart.length > 0){
                    return(
                <React.Fragment>
                <Title title= {"Your Cart "}/>
                <CartColumns/>
                <CartList value={value}/>
                <CartTotals value ={value} />
                </React.Fragment>
                    );
                }
                else {
                    return(
                <React.Fragment>
                <Title title= {"Your Cart is currently empty  "}/>
                
                </React.Fragment>
                    );
                }
                

               }}
                
           
            </ProductConsumer>
            </React.Fragment>
        )
    }
}
