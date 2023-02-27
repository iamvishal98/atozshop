import React from 'react';
import {FaCcPaypal,FaCcVisa,FaCcMastercard,FaCcDiscover,FaCcStripe} from 'react-icons/fa';
import './footer.scss';
import logo from '../../assets/logo.png'
import {Link} from 'react-router-dom'

const Footer = () => {
  return (
    <div className="wrapper_footer">
      <div className="top">
        <div className="left">
          <div className="logo">
            <img src={logo} alt='logo' />
          </div>
          <div className="categories">
            <h2>Buy</h2>
            <Link to='/products/watches' className='link'><p>Watches</p></Link>
            <Link to='/products/shirts' className='link'><p>Shirts</p></Link>
            <Link to='/products/saree' className='link'><p>Saree</p></Link>
        </div>
        </div>
        <div className="right">
          <div className="about">
            <h2>About</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem, minima repudiandae fugit qui quam explicabo suscipit, veritatis itaque placeat iusto maiores accusamus obcaecati! Fugit debitis sunt optio hic harum eius!</p>
          </div>
          <div className="contact">
            <h2>Contact</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum porro repudiandae praesentium perferendis eveniet vel ex laudantium. Beatae aliquid tempore minima alias iste nemo distinctio illo id doloribus voluptate. Maxime!</p>
          </div>
        </div>
      </div>
      <div className="down">
        <FaCcStripe className='payment_icon'/>
        <FaCcPaypal  className='payment_icon' />
        <FaCcVisa  className='payment_icon' />
        <FaCcMastercard  className='payment_icon'/>
        <FaCcDiscover  className='payment_icon'/>
      </div>
    </div>
  )
}

export default Footer