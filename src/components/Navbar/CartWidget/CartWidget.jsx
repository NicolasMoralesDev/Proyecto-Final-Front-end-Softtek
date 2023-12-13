import { BsCart4 } from 'react-icons/bs';
import { useCart } from '../../../context/Hooks.js';
import styles from './CartWidget.module.css'; // Importar archivo CSS
import CardCart from './CardCart/CardCart.jsx';
import { useEffect, useState } from 'react';

const CartWidget = () => {

  const [totalProducts, setTotalProducts] = useState(0);
  
  const { cart } = useCart();

  useEffect(() => {
    if (cart.length > 0) {
      setTotalProducts(cart.length);
    } else {
      setTotalProducts(0);
    }
  }, [cart])

  return (

    <div className={styles.cartWrapper}>
      <div className={styles.cartIcon} data-bs-toggle="dropdown" aria-expanded="false">
        <BsCart4 />
      </div>
      <div className="dropdown-menu mt-2">
        <div className="d-flex flex-column">
          <CardCart />

          <a className='btn btn-success m-2 fw-bold' href='/carrito'>Terminar compra</a>
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