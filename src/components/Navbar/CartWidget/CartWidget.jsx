import { BsCart4 } from 'react-icons/bs';
import { useCart } from '../../../context/Hooks.js';
import styles from './CartWidget.module.css'; // Importar archivo CSS
import CardCart from './CardCart/CardCart.jsx';
import { CartContext } from '../../../context/CartContext.jsx';
import { useContext, useEffect, useState } from 'react';

const CartWidget = () => {

  const [totalProducts, settotalProducts] = useState(0);

  const {addToCart} = useContext(CartContext);

  useEffect(() => {

    settotalProducts(useCart);
  

  }, [addToCart])
  
  return (

    <div className={styles.cartWrapper}>
      <div className={styles.cartIcon} data-bs-toggle="dropdown" aria-expanded="false">
        <BsCart4 />
      </div>
      <div className="dropdown-menu mt-2">
        <div className="d-flex flex-column">
          <CardCart />

          <a className='btn btn-success m-2 fw-bold' href='/carrito'>terminar compra</a>
        </div>


      </div>

      {(totalProducts > 0) && ( // Mostrar el contador solo si hay productos en el carrito
        <div className={styles.productCount}>
          {totalProducts}
          
        </div>
      )}

    </div>
  );
};

export default CartWidget;