import React, {useRef, useState } from 'react';
import {useNavigate} from 'react-router-dom';
import {useDispatch, useSelector } from 'react-redux';


import {HiOutlineShoppingCart} from 'react-icons/hi';
import {FaSignInAlt,FaSignOutAlt,FaSearch} from 'react-icons/fa';

import './header.scss';
import Logo from '../../assets/logo.png'
import clickOutside from '../../utils/helper/clickOutside';


import { auth } from '../../firebase/firebase';
import { logOut } from '../../redux/slicers/AuthSlice';


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
            {isUserLoggedIn ?
              <FaSignOutAlt className='icon' onClick={handleLogout} style={{color:'green'}}/>
              :
              <FaSignInAlt className='icon' onClick={handleLogin} style={{color:'red'}}/> 
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