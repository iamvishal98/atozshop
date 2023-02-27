import React from 'react';
import { useNavigate } from 'react-router-dom';
import './categories.scss';

const Categories = () => {
    const navigate = useNavigate();
  return (
    <div className='category_container'>
        <div className="col">

                <div className="row link" onClick={() => (navigate('/products/shoes'))}>
                    <img src='https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80'
                    alt='image'
                    />
                    <button>shoes</button> 
                </div> 
 
     
                <div className="row link" onClick={() => (navigate('/products/watches'))}>
                    <img src='https://images.unsplash.com/photo-1524805444758-089113d48a6d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d2F0Y2h8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60'
                        alt='image'
                    />
                    <button>watches</button> {/* link  */}
                </div>
          
        </div>
        <div className="col">
            
            <div className="row link" onClick={() => (navigate('/products/shirts'))}>
                <img src='https://images.unsplash.com/photo-1626497764746-6dc36546b388?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1326&q=80'
                alt='image'
                />
                <button>shirts</button> {/* link  */}
                </div>
          
        </div>
        <div className="col col_large">
            <div className="row">
                <div className="col">
                   
                        <div className="row link" onClick={() => (navigate('/products/kurta'))}>
                            <img src='https://images.unsplash.com/photo-1600586634514-0d856b8d187b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=866&q=80'
                            alt='image'
                            />
                            <button>kurta</button>
                        </div>
                
                </div>
                <div className="col">
                   
                        <div className="row link" onClick={() => (navigate('/products/perfume'))}>
                            <img src='https://images.unsplash.com/photo-1557170334-a9632e77c6e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cGVyZnVtZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60'
                            alt='image'
                            />
                            <button>perfume</button>
                        </div>
                   
                </div>
            </div>
            <div className="row">
                <div className="row link" onClick={() => (navigate('/products/saree'))}>
                    <img src='https://images.unsplash.com/photo-1583897544350-a97216a4b019?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80'
                    alt='image'
                    />
                    <button>saree</button>
                </div>
            
            </div>
          
           
        </div>
    </div>
  )
}

export default Categories