import React, {useRef, useState } from 'react';
import {useNavigate} from 'react-router-dom';
import {useDispatch, useSelector } from 'react-redux';


import {HiOutlineShoppingCart} from 'react-icons/hi';
import {FaSignInAlt,FaSignOutAlt,FaSearch} from 'react-icons/fa';
import {VscAccount} from 'react-icons/vsc'
import {AiOutlineHeart} from 'react-icons/ai'

import './header.scss';
import Logo from '../../assets/logo.png'
import clickOutside from '../../utils/helper/clickOutside';


import { auth } from '../../firebase/firebase';
import { logOut } from '../../redux/slicers/AuthSlice';
import { notify_warning } from '../../utils/notifications';
import { reset_wishlist } from '../../redux/slicers/WishlistSlice';


const Header = () => {
  
  const Navigate = useNavigate();
  const boxRef = useRef(null);
  const exception = useRef(null);
  const [search,setSearch] = useState('');
  const [showSearch,setShowSearch] = useState(false);
  const dispatch=useDispatch();

  const cartNumber = useSelector(state => state.cart.cartItems.length);
  const isUserLoggedIn = useSelector(state=>state.authentication.isAuth);

  const handleShowSearch = () => { setShowSearch(!showSearch); };

  const helperHandler = () => {setShowSearch(false)};

  clickOutside(boxRef,helperHandler,exception);

  const handleClick = (event) => {
    event.preventDefault(); 
    Navigate(`/products/user/${search}`);
    handleShowSearch();
  };

  const handleCartClick = () => {
      Navigate('/cart')
  };

  const handleLogin =  () => {
       Navigate('/signin')
  };

  const handleLogout = () => {
    dispatch(logOut({auth}));
    dispatch(reset_wishlist([]));
  }

  const handleWishlistClick = () => {
    if(isUserLoggedIn)
      Navigate('/wishlist');
    else
      notify_warning('Please login to access');
  }



  
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className='left' onClick={() => Navigate('/')}>
          <img src={Logo} alt='logo' />
        </div>
        <div className={showSearch ? 'middle active' : 'middle'} ref={boxRef}>
          <form>
            <input type='text' id='search' onChange={(e) => setSearch(e.target.value)}/>
            <button onClick={(e) => handleClick(e)}>search</button>
          </form>
        </div>
        <div className="right">
          <div className='icon-item'>
            <div className='search_icon' ref={exception} onClick={handleShowSearch}>
              <FaSearch className='icon' />
            </div>
            <div className="account_icon">
              <VscAccount className='icon'/>
              <div className="account_options">
                <div className="account_subOptions">
                  <p onClick={() => {isUserLoggedIn ? handleLogout() : handleLogin()}}>  
                    {isUserLoggedIn ? <span>LOGOUT</span> : <span>LOGIN</span>}
                    {isUserLoggedIn ?
                      <FaSignOutAlt className='icon' style={{color:'red'}}/>
                        :
                      <FaSignInAlt className='icon' style={{color:'green'}}/> 
                    }
                  </p>
                  <p onClick={handleWishlistClick}>
                    <span>WISHLIST</span>
                    <AiOutlineHeart className='icon' style={{color:'red'}}/>
                  </p>
                  <p onClick={handleCartClick}>
                    <span>CART</span>
                    <HiOutlineShoppingCart className='icon' />
                  </p>
                </div>
              </div>
            </div>
            <HiOutlineShoppingCart className='icon' onClick={handleCartClick}/>
            <span className='bubble'>{cartNumber}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header