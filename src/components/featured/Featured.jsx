import React from 'react';
import './featured.scss';
import Card from '../card/Card';
import {useSelector} from 'react-redux'

const Featured = ({type}) => {


  const data = useSelector(state=>state.product.products.filter((prd) => prd.current === type));

  return (
    <div className='featured__container'>
        <div className="top">
            <h1>{type} Products</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et assumenda maxime magni odit blanditiis cumque in accusamus illo facilis eveniet similique rem modi, consequatur fugit, ratione voluptatibus quis quidem odio!</p>
        </div>

        <div className="bottom">
            {data.map((item) =>
                <Card item={item} key={item.id} />    
            )}
        </div>
    </div>
  )
}

export default Featured