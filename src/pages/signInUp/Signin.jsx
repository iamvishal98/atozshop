
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../../firebase/firebase';
import { signIn } from '../../redux/slicers/AuthSlice';
import './signinup.scss';
import logo from '../../assets/logo.png'

const Signin = () => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const dispatch = useDispatch();
    const isUserLoggedIn = useSelector(state => state.authentication.isAuth);
    const Navigate = useNavigate();
  
    const handleSubmit =(event) => {
      event.preventDefault();
      dispatch(signIn({auth,email,password}));
    };

    useEffect(()=> {
        if(isUserLoggedIn)
            Navigate('/');

    },[isUserLoggedIn])
  
  
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
            <button>SignIn</button>
            <p>New user ? <Link to='/signup'>Sign Up</Link> </p>
          </form>
        </div>
      </div>
    );
}

export default Signin