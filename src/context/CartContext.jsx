import { createContext, useState } from 'react';
import toast from 'react-hot-toast';

export const CartContext = createContext(); // Create a context object

// eslint-disable-next-line react/prop-types
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Add a product to the cart
  const addToCart = (product) => {

      
    if (cart.filter((item) => item.id === product.id).length === 0) {
      
      setCart([...cart, product]);
      localStorage.setItem( "cart", JSON.stringify([...cart, product]));     

      toast.success('Producto Agregado!');
    } else {
      toast.error('Este Producto ya EXISTE!');
    }
    

  };
  
  // Remove a product from the cart
  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  // Get the total number of products in the cart. Its used in the CartWidget component
  /* const totalProducts = cart.reduce((acc, item) => (acc + item.quantity, 4)); */
  const totalProducts = cart.length;
  const values = {
    cart,
    addToCart,
    removeFromCart,
    totalProducts,
  };

  return (
    <CartContext.Provider value={values}>
      {children}
    </CartContext.Provider>
  );
}
