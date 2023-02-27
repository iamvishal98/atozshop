import React from 'react';
import {Link} from 'react-router-dom';
import './card.scss';


const Card = ({item}) => {

  return (
    <Link to ={`/product/${item.subCategory}/${item.id}`} 
    target="_blank"  className='link'>
    <div className='card_container'>
      <div className="image_container">
        {item.isNew && <span>New season</span>}
        {item?.img1 ? <img src={item.img1} alt="image" className='primaryImage'/>:''}
        {item?.img2 ? <img src={item.img2} alt="image" className='secondaryImage'/> : ''}
      </div>
      <h2>{item.title}</h2>
      <div className="card_prices">
        <h3>{item.oldprice}</h3>
        <h3>{item.newprice}</h3>
      </div>
    </div>
    </Link>
  )
}

export default Card