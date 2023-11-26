import React from 'react';
import Main from '../components/Main';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import ProductsCarousel from '../components/ProductsCarousel';
import Footer from '../components/footer';



export function Home(){
    return(
      <div>
        <Header/>
        <Navbar/>
        <ProductsCarousel/>
        <Footer/>
  
      </div>
    
    )
}