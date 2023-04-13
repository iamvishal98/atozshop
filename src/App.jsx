import React, { useEffect } from "react";
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import { useDispatch } from "react-redux";
import { fetchProducts } from "./redux/slicers/ProductSlice";

import Home from './pages/home/Home';
import Product from './pages/product/Product';
import Products from "./pages/products/Products";
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Cart from './pages/cart/Cart';


import { ToastContainer} from 'react-toastify';
import Signin from "./pages/signInUp/Signin";
import Signup from "./pages/signInUp/Signup";
import Wishlist from "./pages/wishlist/Wishlist";


function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  },[]);

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/signin" element={<Signin/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/products/:category" element={<Products/>} />
          <Route path="/products/user/:search" element={<Products/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/wishlist" element={<Wishlist/>} />
          <Route path="/product/:cateogory/:id" element={<Product/>} />
        </Routes>
        <Footer/>
        <ToastContainer />
      </BrowserRouter>
    </>
  )
}

export default App

