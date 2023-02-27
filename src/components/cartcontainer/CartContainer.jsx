import React from 'react';
import { useDispatch } from 'react-redux';

import {AiFillPlusCircle ,AiFillMinusCircle,AiFillDelete} from 'react-icons/ai';

import { remove_from_cart,incrementQuantity,decrementQuantity } from '../../redux/slicers/CartSlice';
import { notify_success } from '../../utils/notifications';


const CartContainer = ({data}) => {

    const dispatch = useDispatch();

    const handleDelete = (id) => {
        dispatch(remove_from_cart(id));
        notify_success('Removed from cart!');
    };

    const handleIncrement = (id) => { dispatch(incrementQuantity(id))};

    const handleDecrement = (id) => { dispatch(decrementQuantity(id)) };


  return (
    <div className='panel_wrapper'>   
        <div className="img_containter">
         <img src={data.img1} alt='img' />
        </div>
        <div className="detail_container">
        <div className="title_quantity">
          <h2>{data.title}</h2>
          <div className="quantity">
              <AiFillMinusCircle onClick={() => handleDecrement(data.id)} className='icon'/>
              <p>{data.quantity}</p>
              <AiFillPlusCircle  onClick={() => handleIncrement(data.id)} className='icon'/>
          </div>
        </div>
        <div className="pricing">
          <h3>{data.quantity*data.price}</h3>
          <AiFillDelete onClick={() => handleDelete(data.id)} className='icon icon_delete'/>
          </div>
        </div>   
    </div>
  )
}

export default CartContainer