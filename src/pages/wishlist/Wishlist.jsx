import React, { useEffect } from 'react';
import './wishlist.scss';
import { doc, onSnapshot, updateDoc } from 'firebase/firestore';
import { db } from '../../firebase/firebase';
import { useDispatch, useSelector } from 'react-redux';
import { add_to_wishlist, removeFromWishlist, remove_from_wishlist } from '../../redux/slicers/WishlistSlice';
import Card from '../../components/card/Card';
import { add_to_cart } from '../../redux/slicers/CartSlice';
import { notify_success } from '../../utils/notifications';

const Wishlist = () => {
    const dispatch = useDispatch()
    const data = useSelector(state => state.wishlist.wishlistData);
    const loggedinUser = useSelector(state=>state.authentication.authUser);
    const handleAdd = (item) => {
        dispatch(add_to_cart(item));
        notify_success('Added to cart!');
       };
    const wishId = doc(db,'users',`${loggedinUser?.user?.email}`);
    // const handleRemoveFromWishlist =  (passedId) => {
    //     try {
    //       const resulted = data.filter((item) => item.id !== passedId);
    //        updateDoc(wishId,{
    //         wishlistItem:resulted
    //       })
    
    //     }catch(error){
    //       console.log(error)
    //     }
    
    //    }
    useEffect(() => {
        onSnapshot(doc(db,'users',`${loggedinUser?.user?.email}`),(doc) => {
            dispatch(add_to_wishlist(doc.data()?.wishlistItem));
        })
    },[loggedinUser?.user?.email])
  return (
    <div className='wishlist_container'>
        <div className="wrapper">
            {data?.map((item) => (
                <div className="wishlistItems">
                    <Card item={item} key={item.id}/>
                    <button onClick={() => dispatch(remove_from_wishlist({
                        id:item.id,
                        ref:wishId
                    }))}
                    >Remove from Wishlist</button>
                    <button onClick={() => handleAdd(item)}>Add to cart</button>

                </div>
            ))}
        </div>
    </div>
  )
}

export default Wishlist