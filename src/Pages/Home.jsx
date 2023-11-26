
import React from 'react';
import Main from '../components/Main';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import ProductsCarousel from '../components/ProductsCarousel';
import Footer from '../components/footer';
import { Helmet } from 'react-helmet'


export function Home(){
    return(
      <> 
      <Helmet>
                <meta charSet="utf-8" />
                <title>Home</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
        <Header/>
        <ProductsCarousel/>
        <Footer/>
  
      </>
    
    )
}
