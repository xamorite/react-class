import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Navbar';
import Home from './Home';
import Products from './pages/Products';
import Footer from './footer';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
 <React.StrictMode>
   <Navbar/>
    {/* <App/> */}
  <BrowserRouter>
   <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Products' element={<Products/>}/>
      <Route path='/About' element={<Products/>}/>
      <Route path='/Contact' element={<Products/>}/>
   </Routes>
  </BrowserRouter>
   <Footer/>
 </React.StrictMode>
 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

