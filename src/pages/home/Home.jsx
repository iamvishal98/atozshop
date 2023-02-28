import React from 'react';
import './home.scss';

import Featured from '../../components/featured/Featured';
import Categories from '../../components/categories/Categories';
import Contact from '../../components/contact/Contact';

import {FaArrowCircleUp} from 'react-icons/fa';
import ScrollToTop from "react-scroll-to-top";

const Home = () => {

  return (
    <div className='home'>
        <Categories />
        <Featured type="featured"/>
        <Featured type="trending"/>
        <Contact />
        <ScrollToTop 
          smooth 
          component={<FaArrowCircleUp 
            style={{
              position:'absolute',
              bottom:'13px',
              right:'12px',
              color:'purple'
            }}/>} 
          style={{backgroundColor:'#f8f8f8'}}
        />
    </div>
  )
}

export default Home