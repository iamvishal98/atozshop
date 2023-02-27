import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { setParticularOne } from '../../redux/slicers/ProductSlice';
import { add_to_cart } from '../../redux/slicers/CartSlice';
import {notify_success} from '../../utils/notifications';  

import {FcShipped} from 'react-icons/fc';
import {GiWorld} from 'react-icons/gi';
import 'react-toastify/dist/ReactToastify.css';

import './product.scss';


const Product = () => {
   const dispatch = useDispatch();
   const productID = useParams().id;
   const [selectedImage,setSelectedImage] = useState(1);
   const data = useSelector(state => state.product.currentProduct);
   const cartData = useSelector(state => state.cart.cartItems);
   const isItemInCart = cartData.some((item) => item.id===data[0].id);

   const handleAdd = (item) => {
    dispatch(add_to_cart(item));
    notify_success('Added to cart!');
   };

  //  useEffect(() => {
  //     if(dispatch && setParticularOne) dispatch(setParticularOne({
  //       id:productID
  //     }))
  //   },[dispatch, setParticularOne]);

  return (
    <div className='product_container'>
      <div className="left">
        <div className="total_image">
          {data ? <img src={data[0]?.img1} alt='image' onClick={() => setSelectedImage(1)}/> :''}
          {data ?<img src={data[0]?.img2} alt='image' onClick={() => setSelectedImage(2)}/> : ''}
        </div>
        <div className="main_image">
          {data ? <img src={selectedImage === 1 ? data[0].img1 : data[0].img2} alt='image' /> : ''}
        </div>
      </div>

      <div className="right">
        <div className="title">
          {data ? <h1>{data[0]?.title}</h1> : ''}
          {data ? <span>{data[0]?.price}</span> : ''}
        </div>

        <div className="shipping">
          <FcShipped className='icon'/>
          <GiWorld className='icon'/>
        </div>

        <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita earum temporibus voluptatem nihil blanditiis deleniti cumque tempora facilis maxime nulla? Reprehenderit consequuntur eveniet quod consequatur sapiente qui, vel necessitatibus exercitationem.
        </p>
        {isItemInCart ?
          <button disabled>ADDED TO CART</button>
            :
          <button onClick={()=>handleAdd(data[0])} >ADD TO CART</button>
        }


      </div>    
    </div>
  )


}

export default Product