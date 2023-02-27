import React from 'react';
import './listitem.scss';
import Card from '../card/Card';

const ListItem = ({data}) => {
  return (
    <div className='list_container'>
        { data ?
          data.map((item) => 
            <Card item={item} key={item.id}/>
          ) 
          : 
          ''
        }
    </div>
  )
}

export default ListItem