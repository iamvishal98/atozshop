import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import './filterCard.scss';

import { setFilter } from '../../redux/slicers/ProductSlice';

const FilterCard = ({uniqueBrandsName}) => {

    const [brands , setBrands] = useState([]);
    const [sort , setSort] =useState('');
    const dispatch = useDispatch();
  

    const handleBrand = (e) => {
        const isChecked = e.target.checked;
        const value = e.target.value
        setBrands(prevBrands => {
          const newState =  isChecked
          ? prevBrands.concat(value)
          : prevBrands.filter(val => val !== value)
    
        dispatch(setFilter({
                type :'brand',
                brandName : e.target.getAttribute('id'),
                brands: newState
              }))
          return newState
        }
        );
    };

    const handleSort = (e) => {
        if (sort === e.target.getAttribute('id')) return;
        setSort(e.target.getAttribute('id'));
        dispatch(setFilter({
          type: e.target.getAttribute('id')
        }));
    };

    

  return (
    <div className="filter_wrapper">
        <div className="filter">
            <h2>Filter</h2>
        </div>
       {uniqueBrandsName.length>1  ?<div className="filter">
            <h2>Product Categories</h2>
            {uniqueBrandsName.map((item,index) =>(
                <div className="items">
                  <input type='checkbox' 
                      id={item} 
                      value={item} 
                      name='filter' 
                      key={index}
                      onChange={(e) => handleBrand(e)}
                      autoComplete="off"/>
                  <label htmlFor={item}>{item}</label>
                </div>
        ))}
        </div> : null}
        <div className="filter">
            <h2>Sort By</h2>
            <div className="items">
                <input type='radio' id='asc' value='asc' name='filter' onChange={(e) =>{handleSort(e)} }/>
                <label htmlFor='asc'>Price Lowest</label>
            </div>
            <div className="items">
                <input type='radio' id='desc' name='filter'  onChange={(e) =>{handleSort(e)} }/>
                <label htmlFor='desc'>Price Highest</label>
            </div>
        </div>
    </div>
  )
}

export default FilterCard