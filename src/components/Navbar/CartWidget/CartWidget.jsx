import { BsCart4 } from 'react-icons/bs';
import { useCart } from '../../../context/Hooks.js';
import styles from './CartWidget.module.css'; // Importar archivo CSS
import CardCart from './CardCart/CardCart.jsx';

const CartWidget = () => {
  const { totalProducts } = useCart();

  return (

    <div className={styles.cartWrapper}>
      <div className={styles.cartIcon} data-bs-toggle="dropdown" aria-expanded="false">
        <BsCart4 />
      </div>
      <ul className="dropdown-menu ">
        <li>
         <CardCart/>
        </li>

      </ul>
      {totalProducts > 0 && ( // Mostrar el contador solo si hay productos en el carrito
        <div className={styles.productCount}>
          {totalProducts}
        </div>
      )}
    </div>
  );
};

export default CartWidget;