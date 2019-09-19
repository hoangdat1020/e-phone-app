import React, { Component } from 'react'
import {storeProducts,detailProduct} from './data';
const ProductContext= React.createContext();
class ProductProvider extends Component {
   state={
       products:[],
       detailProduct:detailProduct,
       cart:[],
       modalOpen:false,
       modalProduct:detailProduct,
       cartTax:0,
       cartTotal:0,
       cartSubTotal:0
   }
   componentDidMount(){
       this.setProducts();
   }
   setProducts(){
       let tempProducts=[];
       storeProducts.forEach(item =>{
           const tempItem = {...item};
           tempProducts=[...tempProducts,tempItem];
       });
       
       this.setState(() =>{
        return {products : tempProducts};
       }

       )
   }
   increment=(id)=>{
    let tempCart = [...this.state.cart];
    const product = tempCart.find(item => item.id===id);
    const index= tempCart.indexOf(product);
    const selectProduct= tempCart[index];
    selectProduct.count = selectProduct.count+1;
    selectProduct.total= selectProduct.count*selectProduct.price;
    this.setState(()=>{
        return {cart:[...tempCart]}
    },()=>{this.addTotals()})
       


   }
   decrement=(id)=>{
       let tempCart = [...this.state.cart];
       const product = tempCart.find(item => item.id===id);
       const index = tempCart.indexOf(product);
       const selectedProduct = tempCart[index];
       selectedProduct.count= selectedProduct.count-1;
       if(selectedProduct.count===0){
           this.removeItem(id);
       }else{
        selectedProduct.total= selectedProduct.count*selectedProduct.price;
        this.setState(()=>{
            return {cart:[...tempCart]}
        },()=>{this.addTotals()})
       }
       
    }
removeItem=(id)=>{
    // let tempProducts =[...this.state.products];
    // let tempCart =[...this.state.cart];

    let product = this.getItem(id);
    product.inCart =false;
    product.count=0;
    product.total=0;
   
    let tempProducts = this.state.cart.filter(item=>{
       return  (item.id!== id);
    })
    this.setState(()=>{
        return {cart : tempProducts}
    },()=>{
        this.addTotals();
    });
        
    }
 clearCart=()=>{
     this.setState(()=>
     {
         return {cart:[]};
     },()=>{
         this.setProducts();
        this.addTotals();
    }
     )
        
    }
addTotals=()=>{
    let subTotal=0;
    this.state.cart.map(item=>(subTotal += item.total));
    const tempTax=subTotal*0.1;
    const tax= parseFloat(tempTax.toFixed(2));
    const total = subTotal +tax;
    this.setState(()=>{
        return {
            cartSubTotal:subTotal,
            cartTax:tax,
            cartTotal:total

        }
    })


}
   getItem=id=>{
       const product=this.state.products.find(item=>
        item.id===id
        );
        return product;
   }

   handleDetail=(id)=>{
       const product= this.getItem(id);
       this.setState(()=>{
           return {detailProduct:product}
       })
      
   }
   addToCart=(id)=>{
     let temProducts =[...this.state.products];
     const index= temProducts.indexOf(this.getItem(id));
     const product= temProducts[index];
    product.inCart=true;
    product.count=1;
    const price = product.price;
    product.total= price;
    this.setState(()=>{
    return {products:temProducts,cart:[...this.state.cart,product]};
    },()=>{
        this.addTotals();
    });

   };
   openModal=id=>{
       const product= this.getItem(id);
       this.setState(()=>{
        return {modalProduct: product,
        modalOpen:true
        }
       });
   }
   closeModal=id=>{
    
    this.setState(()=>{
     return {
     modalOpen:false
     }
    });
}
   
    render() {
        
        return (
           <ProductContext.Provider value={
               {
            ...this.state,
            handleDetail:this.handleDetail,
            addToCart:this.addToCart,
            openModal: this.openModal,
            closeModal:this.closeModal,
            increment:this.increment,
            decrement:this.decrement,
            removeItem:this.removeItem,
            clearCart:this.clearCart


               }

           }>
               {this.props.children}
           </ProductContext.Provider>
        )
    }
}
const ProductConsumer=ProductContext.Consumer;
export {ProductProvider,ProductConsumer}
