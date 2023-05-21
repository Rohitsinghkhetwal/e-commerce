import React from 'react';
import {Routes, Route} from "react-router-dom";
import Cart from "./Cart";
import Home from "./Home";
import Login from './Login';
import ProductDetail from './ProductDetail';


const Detail = () => {
  return (
    <div>
        <Routes>
        <Route path="/" element={<Home/>}
        />
        <Route path='/products/:id' element={<ProductDetail/>}/>
        <Route path = "/cart" element={<Cart/>}/>
        <Route path = '/login' element={<Login/>}/>
        
        
       
    </Routes>

    </div>
  )
}

export default Detail