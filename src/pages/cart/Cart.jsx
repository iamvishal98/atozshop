import React from 'react';
import { useSelector } from 'react-redux';

import './cart.scss';
import CartContainer from '../../components/cartcontainer/CartContainer';
import Checkout from '../../components/Checkout/Checkout';


import { useAuth0 } from '@auth0/auth0-react';

const Cart = () => {

  const data = useSelector(state => state.cart.cartItems);
  const {isAuthenticated,loginWithRedirect} = useAuth0();
  const cartLength = data.length;

  const subTotal = data.reduce((acc,curr) => {
    acc += curr.price*curr.quantity;
    return acc
  },0)

  return (
  
      <div className='cart_container'>
      {cartLength ?
        <div className="wrapper">
          <div className="left">
            {
              data.map((item) => (
                <CartContainer data={item} key={item.id}/>
              ))
            }
          </div>
          <div className="right">
            <div className="summary_wrapper">
              <div className="top">
                <p>Subtotal : <span>{subTotal}</span></p>
                <p>Shipping : <span>20</span></p>
              </div>
              <div className="down">
                <p>Total:<span>{subTotal+20}</span></p>
                {isAuthenticated ? <Checkout total={subTotal}/> 
                : <button onClick={() => loginWithRedirect()}>Sign in to proceed</button>
                }
                <p style={{color:'red',textAlign:'center',marginTop:'5px'}}>Please use card_number : 4242 4242 4242 4242</p>
              </div>
            </div> 
          </div> 
        </div>

        :

        <h1>No items in cart</h1>
      
      }
      </div>
  )
}

export default Cart