import React, {useRef, useState } from 'react';
import {useNavigate} from 'react-router-dom';
import {useSelector } from 'react-redux';
import { useAuth0 } from "@auth0/auth0-react";

import {HiOutlineShoppingCart} from 'react-icons/hi';
import {FaSignInAlt,FaSignOutAlt,FaSearch} from 'react-icons/fa';

import './header.scss';
import Logo from '../../assets/logo.png'
import clickOutside from '../../utils/helper/clickOutside';





const Header = () => {

  const { loginWithRedirect,logout ,isAuthenticated,user,error} = useAuth0();
  const Navigate = useNavigate();
  const boxRef = useRef(null);
  const exception = useRef(null);
  const [search,setSearch] = useState('');
  const [showSearch,setShowSearch] = useState(false);

  const cartNumber = useSelector(state => state.cart.cartItems.length);

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

  const handleLogin = async () => {
       loginWithRedirect();
  };


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
            {!isAuthenticated ?
            <FaSignInAlt className='icon' onClick={handleLogin} style={{color:'red'}}/>
            :
            <FaSignOutAlt className='icon' onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })} style={{color:'green'}}/>
            }
            <HiOutlineShoppingCart className='icon' onClick={handleCartClick}/>
            <span className='bubble'>{cartNumber}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header