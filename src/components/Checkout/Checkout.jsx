import React from 'react';
import StripeCheckout from "react-stripe-checkout";
import {notify_success} from '../../utils/notifications';
import { useDispatch } from 'react-redux';
import { empty_cart } from '../../redux/slicers/CartSlice';
import { useNavigate } from 'react-router-dom';

const Checkout = ({total}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleToken =  (token) => {
       if(token.id) {
           notify_success(`Sucessfull. Invoice will be sent to ${token.email}`);
           setTimeout(() => {
           dispatch(empty_cart());
           if(window.location.pathname === '/cart')
              navigate('/');
           },6000)
        }
      
      };

  return (
    <StripeCheckout
        stripeKey={import.meta.env.VITE_STRIPE_KEY}
        name='AtoZ Merchants'
        amount={(total+20) * 100}
        token={handleToken}
        currency='INR'
    />
  )
}

export default Checkout