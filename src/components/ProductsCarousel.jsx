import React from "react";
import "../styles/ProductsCarousel.css";
import alienware from "../assets/alienware.jpg";
import monitoraoc from "../assets/monitoraoc.jpg";
import rtx4070 from "../assets/rtx4070.jpg";
import amdryzen9 from "../assets/amdryzen9.jpg";
import teclado from "../assets/teclado.jpg";


const ProductsCarousel = () => {

  const images = [alienware, amdryzen9, teclado, rtx4070, monitoraoc];

  return (
    
    <div className="container">
      <div className="row">
      <div className="col-xs-12 col-md-8 mx-auto">
    
      <div id="carouselAutoplaying" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {images.map((image, index) => (
            <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
             
                <img src={image} className="d-block productCarouselImg" alt={`image-${index}`} />
                </div>
          ))}
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselAutoplaying" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselAutoplaying" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
        </div>
        </div>
      </div>
    </div>
    
  );
};

export default ProductsCarousel;