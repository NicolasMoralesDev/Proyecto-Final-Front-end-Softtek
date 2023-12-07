import { useState } from "react";
import Modal  from "../../../components/Modal/Modal"; 
import { useCart } from "../../../context/Hooks";
import ItemCount from "./ItemCount";
import { v4 as uuidv4 } from 'uuid';
import PaginationProduts from "../../../components/ProductList/PaginationProduts/PaginationProduts";
import PaginationCategory from "../../../components/PaginationCategory/PaginationCategory";
import styles from './BuildYourPc.module.css';

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
        componentspc.length > 0 ?
        componentspc.map((product) => (
          <div key={uuidv4()} className="col-md-6 mb-3" onClick={() => {handleProductClick(product)}}>
            <div className="card" style={{ maxWidth: '540px' }}>
              <div className="row g-0">
                <div className="col-md-4">
                  <img src={product.imageUrl} className={`img-thumbnail rounded-start fixed-size-image ${styles.fixedImages}`} alt={product.name}></img>
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <h6>{product.brand}</h6>
                    <p className="card-text"><small className="text-body-secondary">Precio $ {product.price}</small></p>                   
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))  : <h2 className="text-center">Sin Productos</h2>
      
      }
        {selectedProduct && <Modal show={showModal} handleClose={handleCloseModal} title={selectedProduct.name}>
          <ModalBody product={selectedProduct} handleCloseModal={handleCloseModal}/>
        </Modal>}
        <div className="w-100 mt-5 mb-5">
          {  selectedCategoryName == undefined?
          <PaginationProduts/>
           :  <PaginationCategory/>
          }
         
        </div>
      
      </div>
    );
  };
  
  export default BuildYourPcRight;

// eslint-disable-next-line react/prop-types
const ModalBody = ({ product = null, handleCloseModal }) => { 

  const { addToCart, getProductQuantity } = useCart();

  const initial = getProductQuantity(product.id);

  const onAdd = (amount) => {
    addToCart(product, amount);
    handleCloseModal();
  }

  return (
    <div className="row">
      <div className="col-md-6">
        <img src={product.imageUrl} className="img-thumbnail rounded-start fixed-size-image" alt={product.name}></img>
      </div>
      <div className="col-md-6">
        <p>{product.description}</p>
        <p><small className="text-body-secondary">Precio $ {product.price}</small></p>
        <ItemCount initial={initial} onAdd={onAdd}/>
      </div>
    </div>
  );
} 