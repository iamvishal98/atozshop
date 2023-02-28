import React, { useEffect, useState } from 'react';
import './signinup.scss';


import {auth} from '../../firebase/firebase';
import { useDispatch, useSelector } from 'react-redux';
import { signUp } from '../../redux/slicers/AuthSlice';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.png'

const SignUp = () => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const dispatch = useDispatch();
    const Navigate = useNavigate();
    const isUserLoggedIn = useSelector(state => state.authentication.isAuth)
  
    const handleSubmit =(event) => {
      event.preventDefault();
      dispatch(signUp({auth,email,password}))
    };

    useEffect(()=> {
        if(isUserLoggedIn)
            Navigate('/');

    },[isUserLoggedIn]);
  
  
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
            <input type='text' 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button>Signup</button>
          </form>
        </div>
      </div>
    );
}

export default SignUp