
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../../firebase/firebase';
import { signIn } from '../../redux/slicers/AuthSlice';
import './signinup.scss';
import logo from '../../assets/logo.png'
import {doc,onSnapshot } from 'firebase/firestore';
import { db } from '../../firebase/firebase';
import { add_to_wishlist } from '../../redux/slicers/WishlistSlice';

const Signin = () => {
    const [email,setEmail] = useState('email@email.com');
    const [password,setPassword] = useState('Pass@123');
    const dispatch = useDispatch();
    const isUserLoggedIn = useSelector(state => state.authentication.isAuth);
    const loggedinUser = useSelector(state=>state.authentication.authUser);
    const Navigate = useNavigate();
  
    const handleSubmit =(event) => {
      event.preventDefault();
      dispatch(signIn({auth,email,password}));
    };

    useEffect(()=> {
        if(isUserLoggedIn)
           {
            Navigate('/');
            onSnapshot(doc(db,'users',`${loggedinUser?.user?.email}`),(doc) => {
              dispatch(add_to_wishlist(doc.data()?.wishlistItem));
          })
            
           }

    },[isUserLoggedIn,loggedinUser?.user?.email])
  
  
    return (
      <div className="form_container">
        <div className="form_wrapper">
          <div className="logo_div" onClick={() => Navigate('/')}>
            <img src={logo} alt='logo' />
          </div>
          <form on onSubmit={(e) => handleSubmit(e)}>
            <label>Email</label>
            <input type='email' 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label>Password</label>
            <input type='password' 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button>SignIn</button>
            <p>New user ? <Link to='/signup'>Sign Up</Link> </p>
          </form>
        </div>
      </div>
    );
}

export default Signin