import styles from './ProductsCarousel.module.css';
import prueba from "../assets/titulo.png";
import procesador from "../assets/Promo-diciembre.png";




const ProductsCarousel = () => {

  const images = [ prueba, procesador];

  return (
    
    <div className="container-fluid container-carousel h-100">
    
      <div id="carouselAutoplaying" className="carousel" data-bs-ride="carousel">
        <div className="carousel-inner">
          {images.map((image, index) => (
            <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
             
                <img src={image} className={` ${styles.productCarouselImg}`} alt={`image-${index}`} />
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
    
  );
};

export default ProductsCarousel;