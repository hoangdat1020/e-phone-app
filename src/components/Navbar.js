import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {ButtonContainer} from './Button';
export default class Navbar extends Component {
    render() {
        return (
            <NavWrapper className="navbar navbar-expand-sm navbar-dark bg-dark">
            <Link to="/" className="navbar-brand ml-5" >
            <i className="fa fa-phone text-danger Xfont" aria-hidden="true"></i>
            </Link>
          
            <ul className="navbar-nav mr-auto">
               <li className="nav-item">
                  <Link to="/" className="nav-link ml-5 text-white">Products</Link>
               </li>
            
            </ul>
           
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                 <Link to ="/cart" className="nav-link mr-5">
                <ButtonContainer>
                <span className="text-white hoverColor">
                 <i className="fa fa-cart-plus" aria-hidden="true"/>
                 {" "}Cart
                 </span>
                 </ButtonContainer>
                 </Link>
              </li>
            
            </ul>
         </NavWrapper>
        )
    }
    
}
  const NavWrapper= styled.nav`
  .nav-link{
      font-size: 1.4rem;
  }

  .Xfont{
      font-size:2rem;
  }
  `;


