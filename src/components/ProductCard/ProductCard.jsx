/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Col } from 'react-bootstrap'
import styles from './ProductCard.module.css'
import { Toaster } from 'react-hot-toast'
import { v4 as uuidv4 } from 'uuid'

const ProductCard = ({product, handleClick}) => {

  return (
      <div className={`card mb-3 mt-3 d-flex justify-content-center ${styles.card}`} onClick={() => {handleClick(product)}}>
          <div className="row g-0 ">
              <div className="col-md-4">
                  <img src={product.imageUrl} className={styles.img} alt={product.name}></img>
              </div>
              <div className="col-md-8 p-3 card-body">
                      <h5 className="card-title">{product.name}</h5>
                      <p>{product.brand}</p>
                      <p className="card-text fw-bold">Precio $ {product.price}</p>
                      <Toaster
                          position="bottom-right"
                          reverseOrder={false}
                      />
              </div>
          </div>
      </div>

  )
}

export default ProductCard