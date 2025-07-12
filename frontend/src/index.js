import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter , Routes , Route} from "react-router-dom";
import './index.css';
import HomePage from './landing_page/home/HomePage';
import SignupPage from './landing_page/signup/Signup.js';
import AboutPage from './landing_page/about/AboutPage.js';
import ProductsPage from './landing_page/products/ProductsPage.js';
import PricingPage from './landing_page/pricing/PricingPage.js';
import SupportPage from './landing_page/support/SupportPage.js';
import NotFoundPage from './landing_page/NotFound.js';
import Navbar from './landing_page/Navbar.js';
import Footer from './landing_page/Footer.js';
// import Dashboard from '.././/../Dashboard/src/index.js'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Navbar/>
   <Routes>
     <Route path='/' element={<HomePage/>}/>
     <Route path='/signup' element={<SignupPage/>}/>
     <Route path='/about' element={<AboutPage/>}/>
     <Route path='/products' element={<ProductsPage/>}/>
     <Route path='/pricing' element={<PricingPage/>}/>
     <Route path='/support' element={<SupportPage/>}/>
     <Route path='*' element={<NotFoundPage/>}/>
   </Routes>
   <Footer/>
  </BrowserRouter>
);

