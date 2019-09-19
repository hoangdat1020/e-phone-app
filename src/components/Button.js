import styled from 'styled-components';

export const ButtonContainer=styled.button`
 text-transform:capitalize;
 font-size: 1.2rem;
 background:transparent;
 cursor:pointer;
 
 border:0.05rem solid white;
 border-radius:0.5rem;
 margin:0.2rem 0.5rem;
 padding:0.5rem;
 transition:all 0.5s linear;

 border-color:${props=> (props.cart?"var(--mainBlack)":"var(--mainWhite)")};
&:hover{
   
    background-color:grey;
   
 
}
&:focus{
    outline:none;
}

`;