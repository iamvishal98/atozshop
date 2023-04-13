import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { arrayUnion,updateDoc,doc,getDoc, onSnapshot } from 'firebase/firestore';
import { db } from '../../firebase/firebase';

import { setParticularOne } from '../../redux/slicers/ProductSlice';
import { add_to_cart } from '../../redux/slicers/CartSlice';
import {notify_success} from '../../utils/notifications';  

import {FcShipped} from 'react-icons/fc';
import {GiWorld} from 'react-icons/gi';
import 'react-toastify/dist/ReactToastify.css';

import './product.scss';
import { add_to_wishlist } from '../../redux/slicers/WishlistSlice';


const Product = () => {
   const dispatch = useDispatch();
   const productID = useParams().id;
   const [selectedImage,setSelectedImage] = useState(1);
   const data = useSelector(state => state.product.currentProduct);
   const cartData = useSelector(state => state.cart.cartItems);
   const wishlistData = useSelector(state => state.wishlist.wishlistData);
   const isItemInCart = cartData.some((item) => item.id===data[0].id);
   const isItemInWishlist = wishlistData?.some((item) => item.id===data[0].id);
   const isUserLoggedIn = useSelector(state=>state.authentication.isAuth);
   const loggedinUser = useSelector(state=>state.authentication.authUser);
   // ref---> console.log(loggedinUser.user.email)
  

   const wishId = doc(db,'users',`${loggedinUser?.user?.email}`);

   const handleAdd = (item) => {
    dispatch(add_to_cart(item));
    notify_success('Added to cart!');
   };

   const handleWishlist = async() => {
    await updateDoc(wishId,{
      wishlistItem:arrayUnion({
        id:data[0].id,
        img1:data[0].img1,
        title:data[0].title,
        isNew:data[0].isNew,
        subCategory:data[0].subCategory
      })
    });
   }

   const handleRemoveFromWishlist = async (passedId) => {
    try {
      const resulted = wishlistData.filter((item) => item.id !== passedId);
      await updateDoc(wishId,{
        wishlistItem:resulted
      })

    }catch(error){
      console.log(error)
    }

   }

  useEffect(() => {
    onSnapshot(doc(db,'users',`${loggedinUser?.user?.email}`),(doc) => {
        dispatch(add_to_wishlist(doc.data()?.wishlistItem));
    })},[loggedinUser?.user?.email])


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
          <button disabled style={{opacity:'0.5'}}>ADDED TO CART</button>
            :
          <button onClick={()=>handleAdd(data[0])} >ADD TO CART</button>
        }
        <div></div>
        {isUserLoggedIn ?
         isItemInWishlist ?
          <button disabled>Wishlisted</button>  : 
          <button onClick={handleWishlist}>Wishlist</button> 
         : 
         ''}

      </div>    
    </div>
  )


}

export default Product