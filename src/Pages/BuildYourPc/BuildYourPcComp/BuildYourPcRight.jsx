/* eslint-disable react/prop-types */
import { useState } from "react";
import Modal  from "../../../components/Modal/Modal"; 
import { v4 as uuidv4 } from 'uuid';
import PaginationProduts from "../../../components/ProductList/PaginationProduts/PaginationProduts";
import PaginationCategory from "../../../components/PaginationCategory/PaginationCategory";
import ProductCard from "../../../components/ProductCard/ProductCard";
import ProductDetail from "../../../components/ProductDetail/ProductDetail";
import { Col } from "react-bootstrap";


const BuildYourPcRight = ({ componentspc , selectedCategoryName }) => {

    const [showModal, setShowModal] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);

    const handleProductClick = (product) => {
      setSelectedProduct(product);
      setShowModal(true);
    }

    const handleCloseModal = () => {
      setShowModal(false);
    }
  
    return (
      <div className="row">
        <h1>{selectedCategoryName ? selectedCategoryName : "Productos"}</h1>
        {
          componentspc ?
            componentspc.map((product) => (
              <Col xs={12} xl={6} key={uuidv4()}>
                <ProductCard product={product} handleClick={handleProductClick} key={uuidv4()}/>
              </Col>
            ))  
            : 
            <h2 className="text-center">Sin Productos</h2>
        }
        {selectedProduct && <Modal show={showModal} handleClose={handleCloseModal} title={selectedProduct.name}>
          <ProductDetail product={selectedProduct} handleCloseModal={handleCloseModal}/>
        </Modal>}
        <div className="w-100 mt-5 mb-5 d-flex justify-content-center align-items-center">
          {  selectedCategoryName == undefined?
          <PaginationProduts/>
           :  <PaginationCategory/>
          }
         
        </div>
      
      </div>
    );
  };
  
  export default BuildYourPcRight;

