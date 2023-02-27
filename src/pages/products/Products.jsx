import React, { useEffect, useRef, useState } from 'react';
import {useParams} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import {GiHamburgerMenu} from 'react-icons/gi'
import {GrClose} from 'react-icons/gr'

import './products.scss';
import ListItem from '../../components/listItem/ListItem';
import FilterCard from '../../components/filterCard/FilterCard';

import {setParticular,setSearch } from '../../redux/slicers/ProductSlice';
import clickOutside from '../../utils/helper/clickOutside';
import { useScrollToTop } from '../../utils/hooks/useScrollToTop';



const Products = () => {

  const dispatch = useDispatch();
  const [showFilter,setShowFilter] = useState(false);
  const boxRef = useRef(null);
  const exception = useRef(null);
  const {category:cateoryId,search:searchId} = useParams();
  let data;
  useScrollToTop();

  const productsData = useSelector(state =>state.product.currentProducts);
  const filteredData = useSelector(state => state.product.filteredProducts);
  const filterConditon = useSelector(state => state.product.isFilter);
  const uniqueBrandsName = [...new Set(productsData.map(item => item.brand))];

  const handleShowFilter = () => {setShowFilter(!showFilter);};

  const helperHandler = () => {setShowFilter(false);}

  clickOutside(boxRef,helperHandler,exception);
  
  if(filterConditon) 
    data = filteredData;
  else  
    data = productsData;

  useEffect(() => {
    if(cateoryId)
    { dispatch(setParticular({
        subCategory:cateoryId
      }));
    }else {
      dispatch(setSearch(searchId))
     }

  },[cateoryId,searchId])

  if (data.length==0) {
    return (
      <div className='products_container'>
        <h1>Nothing to show..</h1>
      </div>
    )
  }  

  return (
    <div className='products_container'>
      <div className={showFilter ? 'left active' : 'left'} ref={boxRef}>
        <FilterCard uniqueBrandsName={uniqueBrandsName} />
      </div>
      <div className="right">
        <div className="hamburger_menu" ref={exception}>
              {!showFilter ?
              <GiHamburgerMenu className='icon' onClick={handleShowFilter}/>
              :
              <GrClose className='icon' onClick={handleShowFilter} />
              }
        </div>      
        <ListItem data={data}/>
      </div>
    </div>
  )
}

export default Products
